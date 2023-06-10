const movieDetailsContainer = document.getElementById('movie-details');
const movieID = localStorage.getItem('movieID');

if (movieID) {
  fetch(`http://www.omdbapi.com/?apikey=e13452eb&i=${movieID}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        displayMovieDetails(data);
      } else {
        displayErrorMessage(data.Error);
      }
    })
    .catch(error => displayErrorMessage('An error occurred while fetching movie details.'));
} else {
  displayErrorMessage('No movie ID found.');
}

function displayMovieDetails(movie) {
  movieDetailsContainer.innerHTML = '';

  const titleElement = document.createElement('h2');
  titleElement.classList.add('movie-title');
  titleElement.textContent = movie.Title;

  const posterElement = document.createElement('img');
  posterElement.classList.add('movie-poster');
  posterElement.src = movie.Poster !== 'N/A' ? movie.Poster : 'no-image.png';

  const plotElement = document.createElement('p');
  plotElement.classList.add('movie-plot');
  plotElement.textContent = movie.Plot;

  movieDetailsContainer.appendChild(titleElement);
  movieDetailsContainer.appendChild(posterElement);
  movieDetailsContainer.appendChild(plotElement);
}

function displayErrorMessage(message) {
  movieDetailsContainer.innerHTML = '';

  const errorElement = document.createElement('div');
  errorElement.classList.add('error');
  errorElement.textContent = message;

  movieDetailsContainer.appendChild(errorElement);
}
