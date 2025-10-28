const getForm = document.querySelector('.task-form');
getForm.addEventListener('submit', doSubmitForm)
function doSubmitForm(event) {
    event.preventDefault();
    const inputField = document.querySelector('.task-input');
    const taskList = document.querySelector('.tasks');
    if (!inputField.value) {
        alert("Please enter a task!");
        return;
    }
    const newTask = document.createElement('li');
    newTask.textContent = inputField.value;
    newTask.classList.add('task-item');
    taskList.append(newTask);
    newTask.addEventListener('click', ()=>newTask.remove());
    inputField.value = '';
    
    }
    
