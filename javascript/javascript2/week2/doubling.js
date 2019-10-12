// Doubling of number
const numbers = [1, 2, 3, 4];
const doublingNumbers = numbers
  .filter(number => number % 2 !== 0)
  .map(number => number * 2);

console.log(doublingNumbers); //[2, 6]

/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]*/

// map
// double the odd numbers in an array and through away the even numbers.

/*const doubleOddNum = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number +1;
});

console.log("The doubled and incremented numbers are", doubleOddNum); // [3, 5, 7, 9]

// using a map for doubling
const numbersOfArray = [1, 2, 3, 4];

const newNumbers = numbersOfArray.map(function(num){
    return num * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]

let newArray = array.map((currentValue, index, array) => {
    return element to new Array
});

// using a filter
/*const numbersOfArray = [1, 2, 3, 4];
const newNumbers = numbersOfArray.map(function odd(number){
    if ( number.odd <0){
    number.odd +=1; // += 1 check each one by one
    return number;
}
});
console.log (newNumbers);*/
