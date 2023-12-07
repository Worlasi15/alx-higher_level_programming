// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // URL for fetching character data
  var apiUrl = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

  // Perform an AJAX request to fetch character data
  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function(data) {
      // Extract the character name from the response
      var characterName = data.name;

      // Display the character name in the HTML tag DIV#character
      $('#character').text(characterName);
    },
    error: function(error) {
      // Handle any errors that may occur during the request
      console.error('Error fetching character data:', error);
    }
  });
});
