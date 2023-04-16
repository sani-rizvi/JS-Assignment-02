let movies = [];

function loadMovies() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");
  xhr.onload = function() {
    if (xhr.status === 200) {
      movies = JSON.parse(xhr.responseText);
      console.log(movies);
    } else {
      console.log("Error loading movies: " + xhr.status);
    }
  };
  xhr.send();
}

loadMovies();

function displayMovies(movies) {
    let movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    movies.forEach(function(movie) {
      let movieItem = document.createElement("li");
      movieItem.textContent = movie.title + " (" + movie.releaseYear + ")";
      movieList.appendChild(movieItem);
    });
  }
  function getMovies(genre, rating, year) {
    let filteredMovies = movies.filter(function(movie) {
      return movie.genre === genre &&
             movie.rating >= rating &&
             movie.releaseYear >= year;
    });
    displayMovies(filteredMovies);
  }

let genreInput = document.getElementById("genre");
let ratingInput = document.getElementById("rating");
let yearInput = document.getElementById("year");
let submitButton = document.getElementById("submit");
  
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  let genre = genreInput.value;
  let rating = parseFloat(ratingInput.value);
  let year = parseInt(yearInput.value);
  if (genre && rating && year) {
    getMovies(genre, rating, year);
  } else {
    alert("Please enter valid input for all fields.");
  }
});   
if (filteredMovies.length > 0) {
        movieContainer.innerHTML = "";
        filteredMovies.forEach((movie) => {
          const movieDiv = document.createElement("div");
          movieDiv.classList.add("movie");
          movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
          `;
          movieContainer.appendChild(movieDiv);
        });
      } else {
        movieContainer.innerHTML = "<p>No movies found.</p>";
      }
      