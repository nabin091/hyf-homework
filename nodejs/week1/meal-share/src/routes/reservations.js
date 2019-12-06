const express = require("express");
const app = express();
const fs = require("fs");

const resevations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));

app.get("/reservations",function(req, res)=> {
    res.json(reservations);
        
});

module.exports = app;