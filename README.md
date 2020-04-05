# RateLimit
An express + mariadb rate limit middleware. Limit 1000 accesses for each ip in one hour.

To run this projet, first import Dcard.sql in mariadb with setting:
```
host: 'localhost',
user: 'dbuser',
password: '1234567',
database: 'dcard_db'
```


Second, run commands:
```
npm install
npm start
```
then can connect to 127.0.0.1:3000 in browser to view the website
 <br>
For test case, run command:
```
mocha ./test/rateLimit.js
```
to test the db connection
