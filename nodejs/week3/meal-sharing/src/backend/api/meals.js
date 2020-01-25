const express = require("express");
const pool = require("./../database");
//const util = require("./../database");

const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

 //router.use (bodyParser.urlencoded ({extended: false}));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  pool.query("SELECT * FROM meal", (error, results, fields) => {
    if (error) {
      return res.send(error);
    } else {
      res.json(results);
    }
4  });
});

// post a new meal  POST api/meals
router.post("/add-meal", (req, res) => {
  const meal = req.body;
  pool.query("INSERT INTO meal SET ?;", meal, (error, results, fields) => {
    if (error) {
      return res.send(error);
    } else {
      res.json(results);
    }
  });
});

// get a meal by id  GET api/meals/2
router.get("/:id", (req, res) => {
  const mealId = req.params.id;
  //console.log("beginning query");
  pool.query(
    "SELECT * FROM meal where id = ?",
    mealId,
    (error, result, fields) => {
      if (error) {
        return res.send (error);
      } else {
        //console.log("resulting");
        res.json(results);
        
      }
    }
  );
  
});

// update meal by id   PUT api/meals/2
router.put("/:id", (req, res) => {
  const mealId = req.params.id;
  pool.query(
    "UPDATE meal SET `title` = ?, `description` = ?, `location`= ?, `when` = ?, `max_reservations` = ?, `price` = ?, `created_date` = ? `where id` = ?;",
    [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.when,
      req.body.max_reservations,
      req.body.price,
      req.body.created_date,
      mealId
    ],
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      } else {
        res.send("Meal has been updated." );
      }
    }
  );
});

// delete meals by id   DELETE meals/2
router.delete("/:id", (req, res) => {
  const mealId = req.params.id;
  pool.query(
    "DELETE * FROM meal Where id = ?;",
    mealId,
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      } else {
        res.send("Meal has been deleted");
      }
    }
  );
});

// get meals that has smaller price than maxPrice
//http:localhost:3000/api/meals?maxPrice=90

router.get("/", (req, res) => {
  const maxPrice = req.query.maxPrice;
  pool.query(
    "SELECT * FROM meal WHERE price <= ?",
    maxPrice,
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
