// create a web server that can listen to requests
// and send back responses
// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});
app.get('/api/comments', db.getComments);
app.get('/api/comments/:id', db.getCommentById);
app.post('/api/comments', db.createComment);
app.put('/api/comments/:id', db.updateComment);
app.delete('/api/comments/:id', db.deleteComment);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});


// 1. load the http module
var http = require('http');




