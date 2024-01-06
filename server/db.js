const pgp = require('pg-promise')();
const connection = {
  host: 'localhost', // Replace with your database host
  port: 5432, // Replace with your database port
  database: 'truck_repair', // Replace with your database name
  user: 'postgres', // Replace with your database user
  password: '4214' // Replace with your database password
};
const db = pgp(connection);

module.exports = db;
