// const router = require("express").Router();
const express = require('express')
const app = express()
require('dotenv').config()

// const app = express()
// router.get("/", (req, res) => {
//   res.send("GET /places");
// });
app.get("/", (req, res) => {

  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee.jpg'
  }]

  
  res.render('places/index', {places});
});


module.exports = app;
