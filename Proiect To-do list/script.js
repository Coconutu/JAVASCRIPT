const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", onTaskFormSubmit);
function onTaskFormSubmit(event) {
    event.preventDefault();
    const tasklist = document.querySelector(".tasks");
    const taskinput = document.querySelector("input");
    if (!taskinput.value) {
        alert("Completeaza denumirea!");
        return;
    }
    const newTask = document.createElement("li");
    newTask.innerText = taskinput.value;
    newTask.classList.add("tasks");
    tasklist.append(newTask);

    newTask.addEventListener("click", () => {
        newTask.remove();
    })       
taskinput.value = "";
}
