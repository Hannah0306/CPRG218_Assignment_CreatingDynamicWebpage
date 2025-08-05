/**
•  To complete this Assignment follow below steps
•  1.) Go to: OMDB website (https://www.omdbapi.com/)
•  2.) In top navigation menu select "API Key"
•  3.) Select Free account type and give your email address.
•  4.) Go to your mail box and find the mail from OMDB.
•  5.) You will receive the API Key in your mail along with a link to activate your key. Select the link to activate your key
•  6.) Update the "myApiKey" variable with the API key from your mail. IMPORTANT: Before uploading your code to Github or Brightspace, delete your key from this file.
•  7.) There are 3 task in this that you have to complete. Discuss with your instructor to understand the task.
 */

const API_KEY = "6ff7e31b"; 
const searchBar = document.getElementById("searchBar");
const searchIcon = document.getElementById("icon");
const moviesContainer = document.getElementById("movies-container");

async function fetchMovies(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
        displayMovies(data.Search);
    } else {
        moviesContainer.innerHTML = `<p>No movies found. Try a different title.</p>`;
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        moviesContainer.appendChild(movieCard);
    });
}

searchIcon.addEventListener("click", () => {
    const title = searchBar.value.trim();
    if (title) fetchMovies(title);
});

searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const title = searchBar.value.trim();
        if (title) fetchMovies(title);
    }
});
const movieCard = document.createElement("div");
movieCard.className = "movie-card";