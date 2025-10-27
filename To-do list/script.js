const taskForm=document.querySelector("#taskForm"); //preluam formularul
taskForm.addEventListener("submit",onTaskFormSubmit);//adaugam evenimentul de trimitere
function onTaskFormSubmit(event){
    event.preventDefault();//prevenim comportamentul implicit al formularului
    const taskList=document.querySelector(".tasks");//preluam lista de sarcini
    const taskInput=document.querySelector("input");//preluam campul de input
    if (!taskInput.value){
        alert("Completeaza denumirea!");
        return; 
    }
const newItem=document.createElement("li");//creem un nou element de lista
newItem.innerText=taskInput.value;//setam textul elementului cu valoarea din input
newItem.classList.add("task");//adaugam clasa "task" noului element

newItem.addEventListener("click",()=>{
    newItem.remove();//adaugam evenimentul de click pentru a elimina sarcina
})

taskList.append(newItem);//adaugam noul element in lista de sarcini
taskInput.value="";//resetam campul de input
}
