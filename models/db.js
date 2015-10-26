/**
 * Created by priyanga on 10/23/15.
 */
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = process.env.ELEPHANTSQL_URL || "postgres://admin:1234@localhost/mydb";

var client = new pg.Client(conString);
client.connect(function(err) {
	if(err) {
		return console.error('could not connect to postgres', err);
	}
	client.query('CREATE TABLE DEPARTMENT( ID INT PRIMARY KEY      NOT NULL, DEPT           CHAR(50) NOT NULL, EMP_ID         INT      NOT NULL );', function(err, result) {
		if(err) {
			return console.error('error running query', err);
		}
		console.log(result.rows[0]);
		//output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
		client.end();
	});
});