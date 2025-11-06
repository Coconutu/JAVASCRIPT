const storageForm = document.querySelector("#storageForm");
storageForm.addEventListener("submit", submitStorageForm);
clearBtn=document.querySelector("#clearBtn");
clearBtn.addEventListener("click",onClickCearBtn);
function submitStorageForm(event) {
    event.preventDefault();
    const keyInput = storageForm.querySelector("#keyInput");
    const valueInput = storageForm.querySelector("#valueInput");
    if (!keyInput.value) {
        alert("Introdu valoare pentru cheie!");
        return;
    }
    if (!valueInput.value) {
        alert("Introdu valoare pentru cheie!");
        return;
    }

    localStorage.setItem(keyInput.value, valueInput.value);
    keyInput.value = "";
    valueInput.value = "";
}

function onClickCearBtn() {
    if (localStorage.length > 0) {
        localStorage.clear();
    }
    else{
        alert("Nu sunt date in local storage!")
    }
    function showData(){
        
    }
}
