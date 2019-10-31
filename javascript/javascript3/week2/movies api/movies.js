// Movies excercise
// Create an array of bad movies
// Creat an array of bad movies since year 2000
// Create an array of the titles of the bad movies since year 2000

const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
fetch(moviesApi)
     .then(response => response.json())
     .then (movies =>{
        //console.log(movies)
     // creating a badmovies since year 2000
      //function getBadMovies (moviesList){
     const badMovies = movies.filter(movie => movie.rating < 3);
     const badMoviesSince2000 = badMovies.filter(movie => movie.year >= 2000)
     const badMoviesTitleSince2000 = badMoviesSince2000.map(movie => movie.title)
     

      console.log( ' array of bad movie:' + badMovies);
      console.log( 'bad movies since 2000:'+ badMoviesSince2000);
      console.log('bad movie by title:' + badMoviesTitleSince2000);
      
     
   });

   
    // function getBadMovies()
    // .then(function(movies){
    //     return badMovies(movies);
    // })
    // .then(function(badMoviesSince2000){
    //     return listOfBadMovies(badMoviesSince2000);
    // })
    // .then(function(titleOfBadMovies){
    //     return titleOfBadMovies(titleOfBadMovies);
    // })
    // .catch(err);

//     function doSomething(badMovies)
//         .then(badMovies => doSomethingElse(badMovies))
// .then(badMoviesSince2000 => doThirdThing(badMoviesSince2000))
// .then(badMoviesTitle => {
//   console.log(`Got the list: ${badMovies} ${badMoviesSince2000} $ {badMoviesTitle}`);
// })
// .catch(err);
    
// .then(badMovies => doSomethingElse(badMovies))
// .then(badMoviesSince2000 => doThirdThing(badMoviesSince2000))
// .then(badMoviesTitle => {
//   console.log(`Got the list: ${badMovies} ${badMoviesSince2000} $ {badMoviesTitle}`);
// })
// .catch(err);

     
    
