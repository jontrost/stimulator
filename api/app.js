const express = require('express');
const app = express();
const apiKeyId = 'PKGM8JLGXKX0FZNQIQKW';
const secretKey = 'nmKLkOBf0iGaXd4wlgdspBjMwK5YfymWe8XUOeGF';
const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
  keyId: apiKeyId,
  secretKey: secretKey,
  paper: true,
  usePolygon: false,
});

// Example Alpaca API Endpoint
// alpaca.getBars('1Min', ['AAPL'], {start:'2020-04-20T09:30:00-04:00', end:'2020-04-29T16:00:00-04:00'}).then((response) => {
//   console.log(response)
// })

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});

