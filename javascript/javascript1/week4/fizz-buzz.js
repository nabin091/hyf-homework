// fizz buzz
// create a function that prints the number from 1 to 100

// here we need to loop trough each number from 1 to 100 and can achieved from for loop.
// fizz and buzz are two parameters

function fizzbuzz(fizz, buzz) {
  for (i = 1; i <= 100; i++) {
    if (i % (fizz * buzz) === 0) {
      console.log("FizzBuzz");
    } else if (i % buzz === 0) {
      console.log("Buzz");
    } else if (i % fizz === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(4, 12);