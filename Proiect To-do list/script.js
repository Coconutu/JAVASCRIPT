const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", onTaskFormSubmit);
function onTaskFormSubmit(event) {
  event.preventDefault();
  const tasklist = document.querySelector(".tasks");
  const taskinput = document.querySelector("input");
  if (!taskinput.value) {
    alert("Completeaza denumirea!");
  }
  const newtask=document.createElement("li");
  newtask.innerText=taskinput.value;
  newtask.classList.add("tasks");
  tasklist.append(newtask);
  newtask.addEventListener("click",()=>{
    newtask.remove();
  })

  
}
