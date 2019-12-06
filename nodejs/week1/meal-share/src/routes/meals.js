const express = require("express");
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));

app.get("/meals",function (req, res)=>{
    meals.map (meal =>{
        meal.reviews = [];
        for (let i = 0; i < reviews.length ; i++){
            if(reviews[i].mealId === meals.id){
                meal.reviews.push(reviews[i]);
            }
        }
    
    });
    res.json(meal);
});

module.exports = app;
