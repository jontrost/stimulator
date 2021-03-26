const express = require('express');
const cors = require('cors');
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

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/assets', async (req, res) => {
  const assetList = [];

  await alpaca.getAssets({
    status: 'active',
  }).then((response) => {
    response.forEach((asset) => {
      assetList.push({
        name: asset.name,
        symbol: asset.symbol,
      });
    });
  });

  res.json(assetList);
});

app.get('/price-data', async (req, res) => {
  let clock = await alpaca.getClock();
  if(clock.is_open){
    // Same as bottom but use websocket for most recent data point
  }
  else{
    // Change this to be dynamic based on parameters
    alpaca.getBars('day', ['GME'], {start: '2021-03-26', end: '2021-03-26'})
    .then((response) => {
      res.json(response);
    });
  }
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});

