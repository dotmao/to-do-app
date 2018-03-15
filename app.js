function onReady() {
// const addToDoForm = document.getElementById('addToDoForm')
//   const newToDoText = document.getElementById('newToDoText')
//   const toDoList = document.getElementById('toDoList')
//   //const deleteButton = document.getElementById('deleteButton') //access the element deleteButton
//
//   addToDoForm.addEventListener('submit', event => {
//     event.preventDefault(); /*the default behavior is for the page to reload, therefore we need to prevent Default */
//
//     // get the text
//     let title = newToDoText.value; //assign variable "title"
//
//     // create a new li
//     let newLi = document.createElement('li');
//     // create a new input
//     let checkbox = document.createElement('input');
//     // set the input's type to checkbox
//     checkbox.type = "checkbox";
//
//     //set the title
//     newLi.textContent = title;
//     //attach the checkbox to the li
//     newLi.appendChild(checkbox);
//     toDoList.appendChild(newLi);
//
//     //empty the input
//     newToDoText.value = '';
//
//   });
// /
// deleteButtonFuction???
//   deleteButton.addEventListener('click', function() {
//     event.preventDefault();
//
//     for (i=toDoList.children.length-1; i>=0; i--) {
//       if (toDoList.children[i].children[0]) {
//         toDoList.removeChild(toDoList.children[i])
//       }
//
//     }
//
//
//   });
// <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="deleteButton">Delete</button>
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;
  const submitButton = document.getElementById('submitButton');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');


    if (!newToDoText.value) { return; }
//to add newToDos
    toDos.push ({
      title: newToDoText.value,
      complete: false,  //since it is a new 'todo', mark checkbox complete function needs to be off
      id: ++i // increment id variable
    });
    newToDoText.value = ''; //clear the text field for users

    renderTheUI();

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');


    toDoList.textContent = ''; //set it as a empty value in the beginning before user input anything.

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');  //creating new li
      const checkbox = document.createElement('input');  //assign the toDo's title text to the li
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";


      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();

  });

  deleteButton.addEventListener('click', event => {
    event.preventDefault();

    const toRemoveId = 1;
    const filteredTodos = toDos.filter(toDo => toDo.id !== toRemoveId);


  });

  submitButton.addEventListener('submit', event => {
    renderTheUI();
    });

}





// window.onload = function() {
//   onReady();
// }
