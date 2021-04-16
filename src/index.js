document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", addNewTask)

});


function addNewTask(event)
{
  //alert ("clicked on button")
  event.preventDefault();
  var newTaskValue = document.getElementById("new-task-description").value;
  var newTaskItem = document.createElement("li");
  newTaskItem.innerText = newTaskValue;
  
  appendNewTask(newTaskItem);
}

function appendNewTask (value)
{
  const taskLine = document.getElementById("tasks");
  taskLine.appendChild(value);
}



