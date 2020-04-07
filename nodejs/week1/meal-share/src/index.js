const express = require("express");
const app = express();
const mealsData = require("./routes/meals.js");
const cheapMeals = require("./routes/cheapMeals.js");
const largeMeals = require("./routes/largeMeals.js");
const randomMeal = require("./routes/meal.js");
const reservations = require("./routes/reservations.js");
const randomReservation = require("./routes/reservation.js");

// middleware the logs the the date and the request's method, each time the serve gets a request.
app.use((req, res, next) => {
  console.log("method: " + req.method);
  next();
});
app.use((req, res, next) => {
  console.log("date: " + Date.now());
  next();
});


app.use("/meals", mealsData);
app.use("/cheapmeals", cheapMeals);
app.use("/largemeals", largeMeals);
app.use("/randommeal", randomMeal);
app.use("/reservations", reservations);
app.use("/randomReservation", randomReservation);

//assigning port
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server starting at port ${port}`));