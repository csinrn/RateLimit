var conn = require('../routes/rateLimit').conn
var tableName = require('../routes/rateLimit').tableName


// test case for db connection
describe('rateLimitTest', function(){
    it('db Connection check', function(done){
        conn.then( con =>{
            return con.query('SELECT * FROM ' + tableName + ';');
        }).then( res =>{
            done();
        })
    })
})