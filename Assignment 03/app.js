document.getElementById('submit-btn').addEventListener('click', function() {

    const genre = document.getElementById('genre').value.toLowerCase();
    const rating = document.getElementById('rating').value;
    const releaseYear = document.getElementById('release-year').value;
  
    fetch("data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(movieData) {
        const filteredMovies = filterMovies(movieData, genre, rating, releaseYear);
        displayMovies(filteredMovies);
      });
  });
  
  function filterMovies(movieData, genre, rating, releaseYear) {
    return movieData.filter(function(movie) {
      if (genre && !movie.genre.toLowerCase().includes(genre)) {
        return false;
      }
      if (rating && movie.rating < rating) {
        return false;
      }
      if (releaseYear && movie.releaseYear !== releaseYear) {
        return false;
      }
      return true;
    });
  }
  
  function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-recommendation-app');
    movieContainer.innerHTML = '';
  
    movies.forEach(function(movie) {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Release Year: ${movie.releaseYear}</p>
      `;
      movieContainer.appendChild(movieElement);
    });
  }
  
