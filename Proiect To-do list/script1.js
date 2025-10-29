const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", doFormSubmit);
function doFormSubmit(event) {
    event.preventDefault();
    const taskList = document.querySelector(".tasks");
    const listItem = document.querySelector("input");
    if (!listItem.value) {
        alert("Introduceti descrierea!");
        return;
    }
    const newTask = document.createElement("li");
    newTask.innerText = listItem.value;
    newTask.classList.add("tasks");
    taskList.append(newTask);

    newTask.addEventListener("click", () => {
        newTask.remove();

    })


}
listItem.value = "";