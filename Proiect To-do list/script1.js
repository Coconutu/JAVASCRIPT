const taskForm=document.querySelector("#taskForm");
taskForm.addEventListener("submit",doFormSubmit);
function doFormSubmit(event){
    event.preventDefault();
    const taskList = document.querySelector(".tasks");
    const taskInput = document.querySelector("input");
    if (!taskInput.value) {
        alert("Introduceti descrierea!");
        return;
    }
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    newTask.classList.add("tasks");
    taskList.append(newTask);

    newTask.addEventListener("click", () => {
        newTask.remove();

    })

    taskInput.value = "";
}