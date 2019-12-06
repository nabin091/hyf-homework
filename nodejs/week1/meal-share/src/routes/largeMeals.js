const express = require('express');
const app = express();
const fs = require("fs");

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));

app.get ("/largeMeals",function(req, res)=> {
    const largeMeals = meals.filter(meal =>{
         meal.maxNumberOfGuests >= 5);
         res.json(largeMeals);
})
largeMeals.map (meal =>{
    meal.reviews = [];
    for (let i = 0; i < reviews.length ; i++){
        if(reviews[i].mealId === meal.id){
            meal.reviews.push(reviews[i]);
        }
    }

});

module.export = app;