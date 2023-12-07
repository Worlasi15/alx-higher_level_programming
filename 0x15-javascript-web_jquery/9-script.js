// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // URL for fetching translation data
  var apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

  // Perform an AJAX request to fetch translation data
  $.ajax({
    url: apiUrl,
    type: 'GET',
    success: function(data) {
      // Display the translation in the HTML tag DIV#hello
      $('#hello').text(data.hello);
    },
    error: function(error) {
      // Handle any errors that may occur during the request
      console.error('Error fetching translation data:', error);
    }
  });
});
