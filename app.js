function onReady() {
  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')
  const deleteButton = document.getElementById('deleteButton') //access the element deleteButton

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); /*the default behavior is for the page to reload, therefore we need to prevent Default */

    // get the text
    let title = newToDoText.value; //assign variable "title"

    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });

//deleteButtonFuction???
  deleteButton.addEventListener('click', function() {
    event.preventDefault();

    for (i=toDoList.children.length-1; i>=0; i--) {
      if (toDoList.children[i].children[0]) {
        toDoList.removeChild(toDoList.children[i])
      }

    }


  });

}


window.onload = function() {
  onReady();
}
