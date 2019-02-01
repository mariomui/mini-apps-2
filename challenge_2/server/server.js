const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const { urlencoded, json } = bodyParser;

const app = express();


app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());

const getClosingPrices = (req, res, start = '', end = '') => {
  const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  const options = {
    method: 'get',
    params: {
      start,
      end,
    },
  };
  axios(url, { options })
    .then((data) => {
      res.send(data.data);
    });
};

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('/api/data', (req, res) => {
  getClosingPrices(req, res, req.query.start, req.query.end);
});

app.listen(3130);

// ?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
