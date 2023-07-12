// const router = require("express").Router();
const express = require("express");
const app = express();
require("dotenv").config();
const places = require("../models/places.js");

// const app = express()
// router.get("/", (req, res) => {
//   res.send("GET /places");
// });

app.get("/", (req, res) => {
  res.render("places/index", { places });
});

// More code ...

//add new
app.post("/", (req, res) => {
  // console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

app.get("/new", (req, res) => {
  res.render("places/new");
});

app.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id] });
  }
});

app.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

app.put("/:id", (req, res) => {
  let id = Number(req.params.id);

  if (isNaN(id)) {
    res.render("error404");

  } else if (!places[id]) {
    res.render("error404");

  } else {
    // Dig into req.body and make sure data is valid
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }

    // Save the new data into places[id]
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

app.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});





module.exports = app;
