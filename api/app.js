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

alpaca.getBars('1Min', ['AAPL'], {start: '2020-04-20T09:30:00-04:00', end: '2020-04-29T16:00:00-04:00'})
    .then((response) => {

    });

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/assets', async (req, res) => {

  let assetList = [];

  await alpaca.getAssets({
    status: 'active',
  }).then((response) => {
    response.forEach(asset => {
      assetList.push({
        name: asset.name,
        symbol: asset.symbol
      });
    });
  });

  res.json(assetList);

});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});

