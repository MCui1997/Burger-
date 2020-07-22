// Set up database 
var mysql = require('mysql');
let connection;

// if you use heroku, use the first method, otherwise it's normal sql connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'bangbangboomboombus',
		database: 'burgers_db'
	});
};


// Connect database
connection.connect(function(err) {
	if (err) {
		console.error('There was an error conencting: ' + err.stack + '\n');
		return;
	}
	console.log('You are connected as id ' + connection.threadId + '\n');
});

// export the connection back to orm
module.exports = connection;