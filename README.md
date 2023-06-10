# mini-imdb-clone
skill test 
This is a simple IMDb clone app that allows users to search for movies, view movie details, and add movies to their favorites list.

Features

Search movies: Users can search for movies using the search bar. The app fetches data from the OMDB API and displays the search results.
Movie details: Users can click on a movie from the search results to view its details, including the title, poster, and plot.
Add to favorites: Users can add movies to their favorites list by clicking the "Add to Favorites" button on the movie details page.
Open favorites: Users can view their favorite movies by clicking the "Open Favorite" button on the homepage. The favorite movies are stored in the browser's local storage.
Technologies Used

HTML
CSS (Bootstrap)
JavaScript (ES6)
Getting Started

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/imdb-clone.git
Open the project directory:
bash
Copy code
cd imdb-clone
Open the index.html file in your preferred web browser.
Start using the IMDb app by searching for movies, viewing movie details, and adding movies to your favorites list.
API Key

This app uses the OMDB API to fetch movie data. To make API requests, you need to obtain an API key from the OMDB website (https://www.omdbapi.com/) and replace the placeholder API key in the code with your own key.

In the script.js file, look for the following line:

javascript
Copy code
fetch(`http://www.omdbapi.com/?apikey=e13452eb&s=${searchTerm}`)
Replace e13452eb with your actual API key.

Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
