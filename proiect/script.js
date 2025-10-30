const listForm=document.querySelector("#taskForm");
listForm.addEventListener("submit",doFormSubmit);
function doFormSubmit(event){
    event.preventDefault();
    const formInput=document.querySelector("input");
    const listItem=document.querySelector(".tasks");
    if(!formInput.value){
        alert("Introduceti descrierea");
        return;
    }
    const newItem=document.createElement("li");
    newItem.innerText=formInput.value;
    newItem.classList.add("tasks");
    listItem.append(newItem);
    newItem.addEventListener("click",()=>{
        newItem.remove();
    })
   formInput.value=""; 
}
