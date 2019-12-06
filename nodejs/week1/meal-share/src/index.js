const mealsRouter = require("./routes/meals.js");
const cheapMealsRouter = require("./routes/cheapMeals.js");
const largeMealsRouter = require("./routes/largeMeals.js");
const randomMealRouter = require("./routes/meal.js");
const reservationRouter = require("./routes/reservations.js");
const randomReservationRouter = require("./routes/reservation.js");

app.get("/meals", mealsRouter);
app.get("/cheapMeals", cheapMealsRouter);
app.get("/largeMeals", largeMealsRouter);
app.get("/meal", randomMealRouter);
app.get("/reservation", randomReservationRouter);
app.get("/reservations", reservationRouter);


 app.get("/", (req, res) => {
  res.send('hellow world')
});


// Server
const server = app.listen(3000, function() {
  console.log("The app is listening at 3000");
});

