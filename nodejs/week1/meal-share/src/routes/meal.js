const express = require('express');
const app = express();
const fs = require("fs");

// Respond with the json for a random meal (including it's reviews)
const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));

app.get ("/meal",function(req, res) {
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
    

    
    module.export = app;