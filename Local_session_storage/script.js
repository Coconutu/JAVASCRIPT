const storageForm=document.querySelector("#storageForm");
storageForm.addEventListener("submit",submitStorageForm);
function submitStorageForm(event){
    event.preventDefault();
    const keyInput=storageForm.querySelector("#keyInput");
    const valueInput=storageForm.querySelector("#valueInput");
    if (!keyInput.value){
        alert("Introduceti o valoare pentru inputul cheie");
        return;
    }
     if (!valueInput.value){
        alert("Introduceti o valoare pentru inputul valoare");
        return;
    }
    localStorage.setItem(keyInput.value,valueInput.value);

}