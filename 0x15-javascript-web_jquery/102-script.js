// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // When the user clicks on INPUT#btn_translate
  $('#btn_translate').click(function() {
    // Get the language code entered by the user
    var languageCode = $('#language_code').val();

    // URL for fetching translation data
    var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/';

    // Perform an AJAX request to fetch translation data
    $.ajax({
      url: apiUrl + languageCode,
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
});
