const express = require("express");
const fs = require("fs");
const app = express();
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/",(req,res)=>{
    const random = Math.floor(Math.random()*reservations.length);
    const randomReservation = reservations.filter(reservation => reservation.id ===random);
    res.json(randomReservation);
});

module.exports = app;