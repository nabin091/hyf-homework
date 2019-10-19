// function as a variable
//Create funtions that are used in these different ways:
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
//Create a function as a const and try creating a function normally. Call both functions.
//Create an object that has a key whose value is a function. Try calling this function.

let array = [func1, func2, func3];
array.forEach(function(item){
    console.log(item);
});
function func1 (){
    console.log('first function');
}
function func2 (){
    console.log('second function');
}
function func3 (){
    console.log('third function');
}

 //Create an object that has a key whose 
// value is a function. Try calling this function.

const objectOfFunction = {
    key: function  (){
        console.log('calling this function inside an object')
    }

}
objectOfFunction.key();
//Create a function as a const and try creating a function normally. Call both functions.

const helloWorld = () =>{
    console.log('const');
}
 
 function sayHello(){
     console.log('normal');
     
 }
 helloWorld();
 sayHello();