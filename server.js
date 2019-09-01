const express = require('express');
const app = express();
const port = 3000;
//create a server on a local host:
app.listen(port, () => {
  console.log('server running');
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/parks", (request, response) => {
  response.send("The Parks you have seen");
});