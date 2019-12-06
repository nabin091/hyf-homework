const express = require("express");
const app = express();
const fs = require("fs");

const resevations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));
app.get("/reservation",function(req, res)=>{
    res.json(
        reservations[Math.floor(Math.random() * reservations.length)]);

});
module.exports = app;

