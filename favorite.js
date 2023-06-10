const favoritesContainer = document.getElementById('favorites');
const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

displayFavorites();

function displayFavorites() {
  favoritesContainer.innerHTML = '';

  if (favoriteMovies.length > 0) {
    favoriteMovies.forEach(movie => {
      const movieElement = createMovieElement(movie);
      favoritesContainer.appendChild(movieElement);
    });
  } else {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = 'You have no favorite movies.';
    favoritesContainer.appendChild(messageElement);
  }
}

function createMovieElement(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'no-image.png';
  const posterElement = document.createElement('img');
  posterElement.src = poster;

  const titleElement = document.createElement('h2');
  titleElement.classList.add('movie-title');
  titleElement.textContent = movie.Title;

  const yearElement = document.createElement('p');
  yearElement.classList.add('movie-year');
  yearElement.textContent = movie.Year;

  const plotElement = document.createElement('p');
  plotElement.classList.add('movie-plot');
  plotElement.textContent = movie.Plot;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove from Favorites';
  removeButton.addEventListener('click', () => removeMovieFromFavorites(movie));

  const detailButton = document.createElement('button');
  detailButton.classList.add('detail-button');
  detailButton.textContent = 'Movie Details';
  detailButton.addEventListener('click', () => openMovieDetails(movie.imdbID));

  movieElement.appendChild(posterElement);
  movieElement.appendChild(titleElement);
  movieElement.appendChild(yearElement);
  movieElement.appendChild(plotElement);
  movieElement.appendChild(removeButton);
  movieElement.appendChild(detailButton);

  return movieElement;
}

function removeMovieFromFavorites(movie) {
  const movieIndex = favoriteMovies.findIndex(favMovie => favMovie.imdbID === movie.imdbID);

  if (movieIndex > -1) {
    favoriteMovies.splice(movieIndex, 1);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    displayFavorites();
  }
}

function openMovieDetails(imdbID) {
  localStorage.setItem('movieID', imdbID);
  window.open('movie.html', '_blank');
}
