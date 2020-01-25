const express = require('express');
const app = express();
const router = express.Router();
const pool = require("./../database");
const bodyParser = require('body-parser');
//const util = require("./../database");



//router.use (bodyParser.urlencoded ({extended:flase}));
 router.use (bodyParser.json());

// get all reservations // GET api/reservations/

router.get("/",(req,res)=>{
    pool.query ("SELECT * FROM reservations;",(err,result,fields)=>{
        if(error){
            return res.send(error);
        }else{
            res.json(results);
            
        }
    });
});

// post new reservation  POST api/reservations/

router.post("/",(req,res)=>{
    const resrvation = req.body;
    pool.query (
        "INSERT INTO reservation SET ?;",reservation,(err,result,fields)=>{
            if (error){
                return res.send(error);
            }else{
                res.json(results);
            }
        }
    );
});

// get reservation by id   GET api/reservations/2

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    pool.query ("SELECT * FROM reservation WHERE id = ?;", id,(err,results,fields)=>{
        if(error){
            return res.send(error);
        } else {
            res.json(results);
        } 
      }

    );
});

// updates the reservation by id  //PUT api/reservation/2

router.put("/:id", (req,res)=>{
    const id = req.body.id;
    pool.query(
        "UPDATE reservation SET `number_of_guests` = ?,`created_date` = ? `where id` = ?",
     [
         req.body.number_of_guests, 
         req.body.created_date, 
         id
     ],
     (err, results, fields )=>{
         if(error){
             return res.send(error);
         } else {
             res.send("reservation upadated");
         }
     }
    );
});

//Deletes the reservation by id	  DELETE api/reservations/2


router.delete("/:id",(req, res)=>{
    const id = req.params.id;
    pool.query (
        "DELETE FROM reservation WHERE id = ?;", id,
        (err, results, fields)=>{
            if(error){
                return res.send(error)
             } else {
                 res.send("reservation deleted");

             }
        }
    );
});

module.exports = router;