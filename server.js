const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const router = require('./src/router/index.js');
const cors = require('cors');
const api = '/api/v1';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(api, router);
app.listen(port, () => {
  console.log('server udah skuyy di http://localhost:' + port + api);
});