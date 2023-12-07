// Wait for the document to be ready before executing the script
$(document).ready(function() {
  // Attach a click event to the element with id 'add_item'
  $('#add_item').click(function() {
    // Create a new <li> element with the text 'Item'
    var newItem = $('<li>').text('Item');

    // Append the new <li> element to the UL.my_list
    $('ul.my_list').append(newItem);
  });
});
