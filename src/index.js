const express = require('express');
const { Client } = require('pg');
const config = require('./routes/config.json')[process.env.NODE_ENV || "dev"]
const indexRouter = require('./routes/indexRouters.js')

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`I see you on port ${PORT}`);
})