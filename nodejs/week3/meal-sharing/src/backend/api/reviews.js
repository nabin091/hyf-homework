const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");
const bodyParser = require("body-parser");
router.use (bodyParser.json());

// returns all reviews  GET api/reviews/

router.get ("/", (req,res) => { 
    pool.query("SELECT * FROM review;",(error,results,fields)=>{
        if (error){
            return res.send(error);
        }else{
            res.json(results);
        }
    });

});

// Adds a new review  POST api/reviews/
router.post("/", (req, res) => {
    const review = req.body;
    pool.query("INSERT INTO review SET ?",review,(error,results,fields)=>{
        if (error){
            return res.send(error);
        }else{
            res.send("new review added");
        }
    });
});

//Returns review by id	GET api/reviews/2
router.get("/:id", (req,res)=>{
    const id = req.params.id;
    pool.query("SELECT * FROM review where id = ?",id,(error, results, fields)=>{
        if (error){
            return res.send(error);
        }else{
            res.json(results);
        }
    });

});

//Updates the review by id	PUT api/reviews/2
router.put("/:id",(req ,res)=>{
    pool.query (
        "UPDATE review SET `title` = ?, `description` = ?, `meal_id` = ?, `stars` = ?, `created_date` = ? WHERE `id`= ?",
        [
            req.body.title,
            req.body.description,
            req.body.meal_id,
            req.body.stars,
            req.body.created_date,
            req.body.id
          ],
          (error ,results, fields)=>{
              if(error){
                  return res.send(error);
              }else{
                  res.send("updated successfully")

              }
    });
});

//Deletes the review by id	DELETE api/reviews/2
router.delete("/:id",(req, res)=>{
    const id = req.params.id;
    pool.query (
        "DELETE FROM review WHERE id = ?;", id,
        (err, results, fields)=>{
            if(error){
                return res.send(error)
             } else {
                 res.send("review deleted");

             }
        }
    );
});


module.exports = router;
