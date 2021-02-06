const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list"); //ul
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  //Get New todo from user using text box

  const newTask = document.getElementById("myTask").value;

  //sample output - remove later
  //document.getElementById("demo").innerHTML = newTask;

  //add new Todo to Todo List
  let todoElement = addTodo(newTask);

  //update number of tasks

  itemCountSpan.textContent = countNewTodo();

  //update number of unfinished tasks
  countUnfinished();

  //clear input box

  document.getElementById("myTask").value = "";
}

function addTodo(newTask) {
  // check if newTask is not Empty

  if (newTask != "") {
    // create new LI
    const taskItem = document.createElement("LI");

    //add class for styles
    taskItem.classList.add("todo-container");
    taskItem.onclick = checkCount;

    const checkbox = document.createElement("input");
    //checkbox.addEventListener("onChange",taskChecked())
    checkbox.setAttribute("type", "checkbox");

    checkbox.classList.add("todo-checkbox");

    //add eventListener to dynamic checkbox
    //checkbox.addEventListener("click",taskChecked(),false)

    //add text ti LI which is from text field
    const taskText = document.createTextNode(newTask);

    const button = document.createElement("button");
    button.className = classNames.TODO_DELETE;
    button.innerText = "X";

    //update dom tree
    taskItem.appendChild(checkbox);
    taskItem.appendChild(button);
    taskItem.appendChild(taskText);

    list.appendChild(taskItem);

    //delete button on item
    button.addEventListener("click", function () {
      this.parentNode.remove();
      //update task count
      itemCountSpan.textContent = countNewTodo();
    });

    return taskItem;
  }
}

const checkCount = function () {
  var selected = [];
  var span = uncheckedCountSpan;

  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    selected.push(checkboxes[i]);
  }

  //currently counts how many are checked
  //and displays the count on left side
  //let's change that
  // --
  span.innerHTML = list.childElementCount - selected.length;
};

// count total todos
function countNewTodo() {
  return list.childElementCount;
}

//gets the total number of tasks
//minus checked tasks
function countUnfinished() {
  //goes through the checkboxes if they are checked

  var selected = [];
  var span = uncheckedCountSpan;

  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    selected.push(checkboxes[i]);
  }

  span.innerHTML = list.childElementCount - selected.length;
}

function deleteTasks() {
  // console.log("Deleting tasks")
  var e = document.querySelector("ul");
  var dl = document.getElementById("downloadlink");
  e.innerHTML = "";
  itemCountSpan.innerHTML = 0;
  uncheckedCountSpan.innerHTML = 0;
  dl.style.display = "none";
}

// function createReport(){

//   //test

//   console.log('creating report')

//   // const message = 'test'

//   // const target = document.getElementById('target')

//   const a = document.createElement('a')
//   console.log(a)
//   var link = document.createTextNode('Send Report')
//   console.log(link)
//   a.appendChild(link)

//   // retrieve all li, use an array

//   //need to find a way to add message to email

//   const message =
//   const
//   a.href=

//   //It worked
//   // a.onclick = console.log('I was clicked')
//   // have to find a way to remove this when clicked
//   // a.onclick = this.remove

//   document.getElementById('target').appendChild(a)

// }

// added 2-6-21
// enter key listener

var task = document.getElementById("myTask");

task.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    //checks whether the pressed key is "Enter"

    // console.log("enter was pressed");
    newTodo();
  }
});