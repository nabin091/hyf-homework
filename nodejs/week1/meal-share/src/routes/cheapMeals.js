const express = require("express");
const app = express();
const fs = require("fs");
// Respond with the json for all the meals
const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));


app.get("/cheapMeals",function(req, res)=> {
    const cheapMeals = meals.filter(meal=> meal.price <= 50);
    res.json(cheapMeals);
    })

module.exports = app;