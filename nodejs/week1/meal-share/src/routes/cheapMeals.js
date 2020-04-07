const express = require("express");
const app = express();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/meals.json", "utf-8");
const meals = JSON.parse(data);



app.get("/",(req, res)=> {
    const cheapMeals = meals.filter(meal=> meal.price <= 50);
    res.json(cheapMeals);
    })

module.exports = app;