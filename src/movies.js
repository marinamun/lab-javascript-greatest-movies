// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSteven = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return moviesSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const sum = moviesArray.reduce((accumulator, eachMovie) => {
      if (typeof eachMovie.score === "number") {
        return accumulator + eachMovie.score;
      } else {
        return accumulator;
      }
    }, 0);
    let average = sum / moviesArray.length;
    return parseFloat(average.toFixed(2)); // using parseFloat(xxx.toFixed(2)) rounds the number to whatever decimals I say
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    //we get the drama movies
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  } else {
    let numberDramaMovies = dramaMovies.length; // we calculate how many drama movies there are
    const dramaMoviesTotalScore = dramaMovies.reduce(
      // we do the sum of the scores of the drama movies
      (accumulator, eachMovie) => {
        return accumulator + eachMovie.score;
      },
      0
    );
    const dramaScoreAverage = dramaMoviesTotalScore / numberDramaMovies; // we calculate the average
    return parseFloat(dramaScoreAverage.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newOrder = moviesArray.toSorted((a, b) => {
    if (a.year === b.year){
        if (a.title < b.title)
        return -1 ;  // return -1 for a,b - return 1 for b,a order.
    } else {
        return a.year - b.year;
    }
  }
  );
  return newOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const getTitles = moviesArray.map((movie) => {       //we get the titles (in an array?)
        return movie.title
    })
    const newOrder = getTitles.toSorted((a,b) => {if (a < b) return -1;  
      if (a > b) return 1;
      return 0;
    });  //we order the titles alphabetically 
    
    return newOrder.slice(0, 20); 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


const ascendingOrder = moviesArray.toSorted((a, b) => a - b) // a, b

const descendingOrder = moviesArray.toSorted((a, b) => a + b) // b, a