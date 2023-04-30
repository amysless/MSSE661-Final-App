const mysql = require('mysql');
const queriesTask = require('./queries/tasks.queries');
const queriesUser = require('./queries/auth.queries');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || '127.0.0.1';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'password';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'tododb';

// Create the connection with required details
const con = mysql.createConnection({
  host,
  user,
  password,
  database
});

// Connect to the database.
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');

  con.query(queriesTask.CREATE_TASKS_TABLE, function(err, result) {
    if (err) throw err;
    console.log('Table created or exists already!');
  });

  con.query(queriesUser.CREATE_USERS_TABLE, function(err, result) {
    if (err) throw err;
    console.log('Table created or exists already!');
  });
  
});

module.exports = con;
