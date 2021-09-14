const express = require('express');
const https = require('https');
const { apiKey } = require('./apikey');
const apiKey = './apiKey.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
//what happens when user visit home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const query = req.body.inputText;
  const apiKey = apiKey;
  const unit = 'imperial';
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    unit;

  https.get(url, (response) => {
    //console.log(response.statusCode);
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const city = weatherData.name;
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const img = `openweathermap/img/wn/${icon}@2x.png`;
      const weatherReport = `
                      <h1>The temperature in ${city}</h1>
                      <p>The temperature out of the board is ${temp}</p>
                      <p><b>And it maybe ${desc}</b></p>
                      <img src="${img}" alt="${desc}">`;
      res.send(weatherReport);
    });
  });
  console.log('search city:' + req.body.cityName);
});

app.listen(3000, () => {
  console.log('Server is runniong on port 3000');
});
