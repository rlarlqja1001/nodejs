'use strict';

const express = require('express');

// Constant
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Run nodejs on Accordion.\n');
});

app.get('/helloworld', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Helloworld.\n');
});



app.get('/mysql', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'mysql',
    user     : 'root',
    password : 'password',
    database : 'my_db'
  });

  connection.connect();

  connection.query('SELECT * from Users', (error, rows, fields) => {
    if (error) throw error;
    //console.log('User info is: ', rows);
    res.json(rows);
    //res.send('User info is: ', rows);
  });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);