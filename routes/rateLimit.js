var express = require('express');
var router = express.Router();
var mariadb = require('mariadb')
var schedule = require('node-schedule')

// variable setting
const accessLimit = 1000; 
const tableName = 'ip_record';

// set connection to mariadb
const conn = mariadb.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: '1234567',
    database: 'dcard_db'
});

// set 1 hour interval of TRUNCATE ip_record
var rule = new schedule.RecurrenceRule();
rule.minute = 0;
schedule.scheduleJob(rule, clearRecord);



router.use('/', function(req, res, next){

    // when getting a request, search in db for this coming ip
    conn.then( con =>{
        return con.query('SELECT * FROM ' + tableName + ' WHERE ip="' + req.ip + '"');
    }).then( response => {
        // if this ip does not exist in db, insert this ip
        if (response.length == 0){
            console.log(response, response[0], response[1])
            conn.then( con =>{ 
                con.query('INSERT INTO '+ tableName +' (ip, times) VALUES ("'+  req.ip.toString() +'", 1);');
            });
            res.setHeader('X-RateLimit-Remaining', accessLimit - 1);

        // if this ip reaches access limit, send 429 and return
        }else if (response[0].times >= accessLimit){
            res.status(429).send('Too Many Requests');
            return 0;

        // if this ip does not reach access limit, update db
        }else{
            conn.then( con =>{ 
                con.query('UPDATE '+ tableName +' SET times='+ (response[0].times+1) +' WHERE ip="' + req.ip.toString() +'";');
            });
            res.setHeader('X-RateLimit-Remaining', 1000 - response[0].times);
        }
        res.setHeader('X-RateLimit-Reset', 60 - new Date().getMinutes());
        next();
    }).catch( err =>{
        console.log("Error in rateLimit: ", err);
    });
});

// TRUNCATE db
function clearRecord(){
    conn.then( con =>{ 
        con.query('TRUNCATE TABLE '+ tableName +';');
    });
}

module.exports.router = router;
module.exports.conn = conn;
module.exports.tableName = tableName;
