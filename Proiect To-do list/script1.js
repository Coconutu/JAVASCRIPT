const taskForm=document.querySelector("#taskForm");
taskForm.addEventListener("submit",onTaskFormSubmit);
function onTaskFormSubmit(event){
    event.preventDefault();
    const inputValue=document.querySelector("input");
    const listForm=document.querySelector(".tasks");
    if (!inputValue.value){
        alert("Introduceti descrierea");
        return;
    }
    const newTask=document.createElement("li");
    newTask.innerText=inputValue.value;
    newTask.classList.add("tasks");
    listForm.append(newTask);
    newTask.addEventListener("click",()=>{
        newTask.remove();
    })
    
    inputValue.value="";
}
