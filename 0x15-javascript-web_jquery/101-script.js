// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // When the user clicks on DIV#add_item
  $('#add_item').click(function() {
    // Create a new <li> element with the text 'Item'
    var newItem = $('<li>').text('Item');

    // Append the new <li> element to the UL.my_list
    $('ul.my_list').append(newItem);
  });

  // When the user clicks on DIV#remove_item
  $('#remove_item').click(function() {
    // Select and remove the last <li> element from the UL.my_list
    $('ul.my_list li:last-child').remove();
  });

  // When the user clicks on DIV#clear_list
  $('#clear_list').click(function() {
    // Remove all <li> elements from the UL.my_list
    $('ul.my_list').empty();
  });
});
