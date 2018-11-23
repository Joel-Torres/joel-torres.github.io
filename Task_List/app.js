//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  //DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //remove a single task event. By only clicking the x element.
  taskList.addEventListener('click', removeTask);
  //clear all of the tasks/list items/click on btn
  clearBtn.addEventListener('click', clearTasks);
  //filter thru tasks event
  filter.addEventListener('keyup', filterTasks);
};

//Get task from Local Storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
      tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
  //create li element
  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(task));
  //create new link element
  const link = document.createElement('a');
  //add a class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);

  });
}

//add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  //create li element
  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add a class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);

  //Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear the input
  taskInput.value = '';

  e.preventDefault();
};

//store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
      tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}


//remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?!')) {
    e.target.parentElement.parentElement.remove();

    //remove from local storage
    removeTaskFromLocalStorage
    (e.target.parentElement.parentElement);
    }
  }
};

//Remove from local storage function
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
      tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index,1)
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear all task li's at once. hence you are clearing the whole ul
function clearTasks(e){
  while(taskList.firstChild) {
    taskList.firstChild.remove(taskList.firstChild);
  }

  //Clear from local storage
  clearTasksFromLocalStorage();
}


//Clear Tasks from Local Storage
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
    } else {
        task.style.display = 'none' ;    
    }
  });
}

