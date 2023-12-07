// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // Attach a click event to the element with id 'toggle_header'
  $('#toggle_header').click(function() {
    // Select the <header> element
    var headerElement = $('header');

    // Toggle the class between 'red' and 'green'
    if (headerElement.hasClass('red')) {
      headerElement.removeClass('red').addClass('green');
    } else if (headerElement.hasClass('green')) {
      headerElement.removeClass('green').addClass('red');
    }
  });
});
