const apiKey = 'ec128621'; // Replace with your actual OMDB API key
const searchInput = 'Harry Potter'; // Example search query

fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        // Process the retrieved data
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchMovies);
    