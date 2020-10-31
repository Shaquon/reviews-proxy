const express = require('express');
// const router = express.Router();
// const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3004;

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

//Photos
app.get('/api/restaurants/:id/photos', (reqProxy, resProxy) => {
  axios.get(`http://3.86.33.200/api/restaurants/${reqProxy.params.id}/photos`)
    .then((response) => {
      resProxy.status(200).send(response.data)
    });
});


app.get('/api/restaurant/:id', (reqProxy, resProxy) => {
  axios.get(`http://52.53.226.190/api/restaurant/${reqProxy.params.id}`)
    .then((response) => {
      resProxy.status(200).send(response.data)
    });
});


app.get('/api/dish/:id', (reqProxy, resProxy) => {
  axios.get(`http://52.53.226.190/api/dish/${reqProxy.params.id}`)
    .then((response) => {
      resProxy.status(200).send(response.data)
    });
});


//Reviews
app.get('/api/restaurants/:id', (reqProxy, resProxy) => {
  axios.get(`http://18.221.59.48:3002/api/restaurants/${reqProxy.params.id}`)
    .then((response) => {
      resProxy.status(200).send(response.data)
    });
});


app.get('/api/restaurants/:id/reviews', (reqProxy, resProxy) => {
  axios.get(`http://18.221.59.48:3002/api/restaurants/${reqProxy.params.id}/reviews`)
    .then((response) => {
      resProxy.status(200).send(response.data)
    });
});


app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});