const express = require('express');
const cors = require('cors');
const app = express();
const apiKeyId = 'PKGM8JLGXKX0FZNQIQKW';
const secretKey = 'nmKLkOBf0iGaXd4wlgdspBjMwK5YfymWe8XUOeGF';
const {AlpacaClient} = require('@master-chief/alpaca');

const alpacaClient = new AlpacaClient({
  credentials: {
    key: apiKeyId,
    secret: secretKey,
    paper: true,
  },
  rate_limit: true,
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/assets', async (req, res) => {
  const assetList = [];

  const response = await alpacaClient.getAssets({status: 'active'});
  response.forEach((asset) => {
    assetList.push({
      name: asset.name,
      symbol: asset.symbol,
    });
  });

  res.json(assetList);
});

app.get('/price-data/:symbol/:start/:end/:timeFrame', async (req, res) => {
  const symbol = req.params.symbol;
  const start = req.params.start;
  const end = req.params.end;
  const timeFrame = req.params.timeFrame;
  const priceData = [];

  const response = await alpacaClient.getBars({
    symbol: symbol,
    start: new Date(start),
    end: new Date(end),
    timeframe: timeFrame,
  });

  response.bars.forEach((bar) => {
    priceData.push({
      price: bar.c,
      time: bar.t,
    });
  });

  res.json({
    symbol: response.symbol,
    priceData: priceData,
  });
});

app.get('/price-data-multiple/:symbols', async (req, res) => {
  const symbols = req.params.symbols.split(',');
  const priceData = [];

  for (const symbol of symbols) {
    const symbolPriceData = [];
    const response = await alpacaClient.getBars({
      symbol: symbol,
      start: new Date('2021-02-26T14:30:00.007Z'),
      end: new Date('2021-02-26T14:40:00.007Z'),
      timeframe: '1Min',
    });
    response.bars.forEach((bar) => {
      symbolPriceData.push({
        price: bar.c,
        time: bar.t,
      });
    });
    priceData.push({
      symbol: response.symbol,
      priceData: symbolPriceData,
    });
  }
  res.json(priceData);
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});

