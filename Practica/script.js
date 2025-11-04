const inputForm = document.querySelector(".inputForm");
const listaTaskuri = document.querySelector(".listaTaskuri");
const btnSterge=document.querySelector(".btnSterge");
btnSterge.addEventListener("click",sterge_tot); 
afiseaza();
inputForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    
    const inputText = document.querySelector("input");
    if (!inputText.value) {
        alert("Introduceti descrierea");
        return;
    }

    const newItem = document.createElement("li");
    newItem.innerText = inputText.value;

    newItem.classList.add("listaTaskuri");
    listaTaskuri.append(newItem);
    localStorage.setItem(newItem.innerText, newItem.innerText);

    newItem.addEventListener("click", () => {
        newItem.remove();
    });
    inputText.value = '';
}
function afiseaza() {
    for (let i = 0; i < localStorage.length; i++) {
        const keyName = localStorage.key(i);
        const newItem = document.createElement("li");
        newItem.innerText = keyName;
        newItem.classList.add("listaTaskuri");
        const listaTaskuri = document.querySelector(".listaTaskuri");
        listaTaskuri.append(newItem);
        newItem.addEventListener("click", () => {
        newItem.remove();
    });
    }

}
function sterge_tot(){

        localStorage.clear();
    

}