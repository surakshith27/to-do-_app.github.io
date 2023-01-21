const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo');
const todoFutureList = document.querySelector('.future-todo');
const todoCompleted = document.querySelector('.completed-todo');
const todoName = document.querySelector('#todo-name');
const todoDeadline = document.querySelector('#deadline');
const todoPriority = document.querySelector('#priority');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoName.value
    const date = todoDeadline.value
    const importance = todoPriority.value

    if (inputValue == '') { 
        return
    }

    const task = {
        id: new Date().getTime(),
        name: inputValue,
        deadline: date,
        priority: importance,
        isCompleted: false
    }

    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

    createTask(task)

    todoForm.reset()
    todoName.focus()

})


function createTask(task){
    const taskEl = document.createElement('div');
    const listItem = document.createElement('li');
    const itemData = document.createElement('div');
    const dataName = document.createElement('span');
    const dataDay = document.createElement('span');
    const dataImp = document.createElement('span');
    const dataTic = document.createElement('button');
    const dataDel = document.createElement('button');
    taskEl.classList.add("litst-item");
    itemData.classList.add("taskData");
    dataName.setAttribute('id','name');
    dataDay.setAttribute('id','day');
    dataImp.setAttribute('id','imp');
    dataTic.classList.add("remove-task");
    dataDel.classList.add("remove-task");

    dataName.innerText = task.name;
    dataDay.innerText = task.deadline;
    dataImp.innerText = task.priority;
    dataTic.innerHTML = `<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"> <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" fill="white"></path> <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" fill="white"></path> </svg>`;
    dataDel.innerHTML = `<svg style="color: rgb(0, 0, 0)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z" fill="black"></path> </svg>`;

    itemData.appendChild(dataName);
    itemData.appendChild(dataDay);
    itemData.appendChild(dataImp);
    itemData.appendChild(dataTic);
    itemData.appendChild(dataDel);

    listItem.appendChild(itemData);

    taskEl.appendChild(listItem);

    todoList.appendChild(taskEl);






}

