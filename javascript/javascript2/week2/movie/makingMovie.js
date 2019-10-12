
const movies = require('./movies.js');
console.log(movies);


// movies with a short title
const shortTitle = movies.filter(movie => movie.title.length < 4);
//movies with long title
const longTitle = movies.filter(movie => movie.title.lenght > 10);

console.log(shortTitle);
console.log(longTitle);

//count the number movies made between 1980-1989(including both the years)
const numberOfMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log(numberOfMovies);

//Create a new array that has an extra key called tag. (using filter,forEach)
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const goodMovies = movies.filter(movie => movie.rating >=7);
console.log(goodMovies);
const averageMovies = movies.filter(movie => movie.rating >= 4 && movie.rating < 7);
console.log(averageMovies);
const badMovies = movies.filter(movie => movie.rating < 4);
console.log(badMovies);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
//Now map the movies array to only the rating of the movies.
const higherRatingThanSix = movies
.filter(movie => movie.rating > 6)
.map(movie => movie.rating);
console.log(higherRatingThanSix);

//Count the total number of movies containing any of 
//following keywords: Surfer, Alien or Benjamin.

const keywords = movies.filter(movie => {
    let convertToLowerCase = movie.title.toLowerCase();
    return convertToLowerCase.includes('surfer') || convertToLowerCase.includes('alien')|| convertToLowerCase.includes('benjamin');
    }).length;
    console.log('total number of movies containing surfer, alien or benjamin :'+' '+ keywords);
    
    //Create an array of movies where a word in the title is duplicated. 
    //Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
    
    
   // let duplicateTitleWords = [];
    //for(let i = 0; i<len; i++) {
    //if (duplicateTitleWords.indexOf(movies[i]) === -1){ // check duplicate words
     //   duplicateTitleWords.push(movies[i]);
    //}
//}
//console.log(duplicateTitleWords ('Star Wars: The Clone Wars'));
//

/*function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }
    return result;

}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));*/
