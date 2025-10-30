const taskForm=document.querySelector("#taskForm");
taskForm.addEventListener("submit",doFormSubmit);
function doFormSubmit(event){
    event.preventDefault();
    const textInput=document.querySelector("input");
    const taskList=document.querySelector(".tasks");
    if (!textInput.value){
        alert("Introduceti descrierea!")
        return;
    }
    const newItem=document.createElement("li");
    newItem.innerText=textInput.value;
    newItem.classList.add("tasks");
    newItem.addEventListener("click",()=>{
        newItem.remove();
    })
    taskList.append(newItem);
    textInput.value="";
}
const newOption=new Option("Varianta 3","Varianta 3");
const combo=document.querySelector("select");
combo.add(newOption);
