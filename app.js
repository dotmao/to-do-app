function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;
  const submitButton = document.getElementById('submitButton');


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = ''; //set it as a empty value in the beginning before user input anything.

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');  //creating new li
      const checkbox = document.createElement('input');  //assign the toDo's title text to the li
      // const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";


      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      // newLi.appendChild(deleteButton);

    });
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    const deleteButton = document.createElement('deleteButton'); //creating deletebutton in JS





    if (!newToDoText.value) { return; }
//to add newToDos avoid submitting empty value
    toDos.push ({
      title: newToDoText.value,
      complete: false,  //since it is a new 'todo', mark checkbox complete function needs to be off
      id: id++ // increment id variable
    });
    newToDoText.value = ''; //clear the text field for users
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');


      toDoList.textContent = ''; //set it as a empty value in the beginning before user input anything.

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');  //creating new li
        const checkbox = document.createElement('input');  //assign the toDo's title text to the li
        const deleteButton = document.createElement('input'); //input is linked to "delete" text
        deleteButton.setAttribute("type", "button"); //setting the deleteButton attribute to "button" type.
        deleteButton.setAttribute("value", "delete"); //setAttribute is a built-in method and always have two prep

        // const deleteButton = document.createElement('button');
        checkbox.type = "checkbox";


        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
        // newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', event => {
          event.preventDefault();


          toDoList.removeChild(newLi)//deleting elements from html;

          //todos.filter

          const toRemoveId = toDo.id;
          const filteredTodos = toDos.filter(toDo => toDo.id !== toRemoveId);
          todos = filteredTodos;//the new array after deletion




        });

      });
    }

    addToDoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      createNewToDo();
      newToDoText = '';
      renderTheUI();
    });
    renderTheUI();

  }







window.onload = function() {
  onReady();
};


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
