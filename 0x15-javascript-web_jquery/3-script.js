// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // Attach a click event to the element with id 'red_header'
  $('#red_header').click(function() {
    // Select the <header> element and add the class 'red'
    $('header').addClass('red');
  });
});

