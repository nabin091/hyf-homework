// 1,log out the text called after 2.5sec 2.5 sec after the script is loaded.
setTimeout (()=> {
    console.log('called after 2.5 sec')
}, 2500);

// 2, Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments. 

function stringToShow ( delay, stringToLog){
    setTimeout(()=>{
        console.log(stringToLog)}, delay)
    };

// calling a function with different arguments
stringToShow(5000,'This string logged after 5 seconds');
stringToShow(3000,'This string logged after 3 seconds');

// create a button in html called after 5 second clicked the button

const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    stringToShow (5000, 'called after 5 second clicked the button')
});
//btn.addEventListener('click', stringToShow);

// 4, create two functions and assign them two different variables.
const earthLogger = function (){
    console.log('this is earth');
}

const satrunLogger = function (){
    console.log('This is saturn')
}
// Third function that has one parameter
const planet = function(planetLogFunction){
      planetLogFunction ();    
}
planet(earthLogger);
planet(satrunLogger);

//Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) 
//of the user should be logged out using this browser api

/*const button = document.getElementById('logLocation')
logLocation .addEventListener ('click me',getLocation);

const latitude  = position.coords.latitude;
const longitude  = position.coords.longitude;

function getLocation(){
    const { latitude,logitude} = coordinates.coords;
    navigator.geoLocation.getCurrentPosition(function(position){
    
        console.log('found coordinates:' ,latitude,logitude);

    });

    }*/
    //https://www.viralpatel.net/html5-geolocation-api-tutorial-example/
const button = document.getElementById('logLocation')
button .addEventListener ('click',showLocation);

    function showLocation(){
        navigator.geolocation.getCurrentPosition(callback)
    }
    function callback(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
    }
    //document.getElementById ("latitude").innerHTML = lat;
    //document.getElementById ("logitude").innerHTML = lon;
    console.log( lat, "this is latitude");
    console.log(lon, "this is longitude");

    //7 ,Create a function called runAfterDelay.  It has two parameters:
     //delay and callback. When called the function should wait delay 
    //seconds and then call the provided callback  function. 
    //Try and call this function with different delays and different callback functions
//https://javascript.info/settimeout-setinterval
    function runAfterDelay (delay , callback) {
        alert (delay + ','+ callback);
    }
        setTimeout(runAfterDelay, 4000, 'should be logged after 4 sec');
            

// 8, Check if we have double clicked on the page. A double click is defined 
//by two clicks within 0.5 seconds. If a double click has been detected, 
//log out the text: "double click!"

const p = document.getElementById('dbl');
//p.ondblclick = function (){
  //this.innerHTML = 'dbl';  
//};
//p.ondblclick(); //
p.addEventListener('click',()=>{
    setTimeout(()=>{
        console.log('double click')
    },500)
}) 

//Create a function called jokeCreator that has three parameters: 
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - 
//function. If you set tellFunnyJoke to true it should call the logFunnyJoke 
//function that should log out a funny joke. And vice versa.


function jokeCreator (shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
 if( shouldTellFunnyJoke === true){
     logFunnyJoke();
 }else{
     logBadJoke();
 }
}
    const logFunnyJoke = function (){
    console.log ('funny joke')
}; 
 const logBadJoke = function (){
     console.log('bad joke')
 
};

