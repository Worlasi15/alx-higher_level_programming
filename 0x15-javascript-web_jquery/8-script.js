// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // URL for fetching movie data
  var apiUrl = 'https://swapi-api.alx-tools.com/api/films/?format=json';

  // Perform an AJAX request to fetch movie data
  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function(data) {
      // Extract the array of movies from the response
      var movies = data.results;

      // Select the HTML tag UL#list_movies
      var listMovies = $('#list_movies');

      // Loop through each movie and add its title to the list
      $.each(movies, function(index, movie) {
        // Create a new list item with the movie title and append it to the list
        $('<li>').text(movie.title).appendTo(listMovies);
      });
    },
    error: function(error) {
      // Handle any errors that may occur during the request
      console.error('Error fetching movie data:', error);
    }
  });
});
