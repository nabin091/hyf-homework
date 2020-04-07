const express = require("express");
const fs = require("fs");
const app = express();
const mealData = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(mealData);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

app.get ("/",(req, res) => {
    const random = Math.floor(Math.random()* meals.length);
    const ranmdoMeal = meals.filter(meal => meal.id ===random);
    res.json(randomMeal)
});
    
    meals.map (meal =>{
        meal.reviews = [];
        for (let i = 0; i < reviews.length ; i++){
            if(reviews[i].mealId === meals.id){
                meal.reviews.push(reviews[i]);
            }
        }
    
    });
    

    
    module.exports = app;