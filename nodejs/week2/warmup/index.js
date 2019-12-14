const express = require("express");
const app = express();

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get("/numbers/add", (req, res) => { 
    //console.log("add number");
    const {first} = req.query;
    const { second} = req.query;
    const add = Number(first) + Number(second);
    res.send(`${first} + ${second} = ${add}`);

}); //request URL is http://localhost:3000/numbers/add?first=3&second=7

//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

app.get("/numbers/multiply", (req, res) => {
    //console.log("multiply numbers");
    const { first } = req.params;
    const { second } = req.params;
    const multiply = first * second;
    res.send(`${first} * ${second}= ${multiply}`);
});

app.listen(3000, ()=> (console.log("server started")));


