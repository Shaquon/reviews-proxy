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

// // Bookings
// app.get('/:restaurantId', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3000/${reqProxy.params.restaurantId}`)
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

// app.get('/api/bookings/restaurantName/:restaurantId', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3000/api/bookings/restaurantName/${reqProxy.params.restaurantId}`)
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

// app.get('/api/bookings/:restaurantId', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3000/api/bookings/${reqProxy.params.restaurantId}`)
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

// app.post('/api/bookings/:restaurantId', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3000/api/bookings/${reqProxy.params.restaurantId}`, {
//     params: reqProxy.query
//   })
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

// //Photos

// app.get('/api/restaurants/photos/:id', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3003/api/restaurants/photos/${reqProxy.params.id}`)
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

// //Popular Dishes
// app.get('/api/dishes/restaurant/:id', (reqProxy, resProxy) => {
//   axios.get(`http://localhost:3001/api/dishes/restaurant/${reqProxy.params.id}`)
//     .then((response) => {
//       resProxy.status(200).send(response.data)
//     });
// });

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