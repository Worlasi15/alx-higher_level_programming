// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // Attach a click event to the element with id 'update_header'
  $('#update_header').click(function() {
    // Select the <header> element and update its text
    $('header').text('New Header!!!');
  });
});
