// User clicked on the add button
// if there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value)
    console.log("Oh yeah");
});
//alternative: document.getElementById('add').onclick;
//window.addEventListener('load', function(){...})
