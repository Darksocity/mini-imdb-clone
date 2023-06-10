



const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');
const favoriteButton = document.getElementById('favoriteButton');
const favoriteMoviesList = document.getElementById('favorite-movies-list');

searchButton.addEventListener('click', searchMovies);
favoriteButton.addEventListener('click', openFavorites);

function searchMovies() {
  const searchTerm = searchInput.value;

  resultsContainer.innerHTML = '';

  fetch(`http://www.omdbapi.com/?apikey=e13452eb&s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        data.Search.forEach(movie => {
          const movieElement = createMovieElement(movie);
          resultsContainer.appendChild(movieElement);
        });
      } else {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.textContent = data.Error;
        resultsContainer.appendChild(errorElement);
      }
    })
    .catch(error => console.error(error));
}

function createMovieElement(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const posterElement = document.createElement('img');
  posterElement.classList.add('movie-poster');
  posterElement.src = movie.Poster !== 'N/A' ? movie.Poster : 'no-image.png';

  const titleElement = document.createElement('h2');
  titleElement.classList.add('movie-title');
  titleElement.textContent = movie.Title;

  const plotElement = document.createElement('p');
  plotElement.classList.add('movie-plot');
  plotElement.textContent = movie.Plot;

  const favoriteButton = document.createElement('button');
  favoriteButton.classList.add('favorite-button');
  favoriteButton.textContent = 'Add to Favorites';
  favoriteButton.addEventListener('click', () => addToFavorites(movie));

  const movieDetailButton = document.createElement('button');
  movieDetailButton.classList.add('movie-detail-button');
  movieDetailButton.textContent = 'Movie Details';
  movieDetailButton.addEventListener('click', () => viewMovieDetails(movie.imdbID));

  movieElement.appendChild(posterElement);
  movieElement.appendChild(titleElement);
  movieElement.appendChild(plotElement);
  movieElement.appendChild(favoriteButton);
  movieElement.appendChild(movieDetailButton);

  return movieElement;
}

function addToFavorites(movie) {
  const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  const existingMovie = favoriteMovies.find(favMovie => favMovie.imdbID === movie.imdbID);

  if (!existingMovie) {
    favoriteMovies.push(movie);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    alert('Added to favorites!');
  } else {
    alert('Movie already in favorites!');
  }
}

function viewMovieDetails(imdbID) {
  localStorage.setItem('movieID', imdbID);
  window.location.href = 'movie.html';
}

function openFavorites() {
  window.location.href = 'favorites.html';
}


