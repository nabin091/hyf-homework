const express = require("express");
const fs = require("fs");
const app = express();
const mealsData = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(mealsData);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

app.get("/", (req, res)=>{
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
