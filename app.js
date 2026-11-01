const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, Cloud CI/CD Pipeline is Live!');
});

module.exports = app;