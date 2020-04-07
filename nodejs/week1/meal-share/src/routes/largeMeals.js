const express = require("express");
const fs = require("fs");
const app = express();
const mealsData = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(mealsData);
const reviewsData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewsData);

app.get("/", (req, res) => {
    const largeMeals = meals.filter(
        meal => meal.maxNumberOfGuests >= 5);
        res.json(largeMeals);    
 })
meals.map(meal =>{
    meal.reviews = [];
    for (let i = 0; i < reviews.length ; i++){
        if(reviews[i].mealId === meal.id){
            meal.reviews.push(reviews[i]);
        }
    }

});

module.exports = app;