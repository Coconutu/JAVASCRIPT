const storageForm = document.querySelector("#storageForm");
const clearBtn = document.querySelector("#clearBtn");
storageForm.addEventListener("submit", submitStorageForm);
clearBtn.addEventListener('click', onClickClearBtn);
showData();
function submitStorageForm(event) {
    event.preventDefault();
    const keyInput = storageForm.querySelector("#keyInput");
    const valueInput = storageForm.querySelector("#valueInput");
    if (!keyInput.value) {
        alert("Introduceti o valoare pentru inputul cheie");
        return;
    }
    if (!valueInput.value) {
        alert("Introduceti o valoare pentru inputul valoare");
        return; //iesim din functie!!!
    }
    if (localStorage.getItem(keyInput.value) != null) {
        alert(`Elementul cu cheia ${keyInput.value}deja exista!`);
        return;
    }
    localStorage.setItem(keyInput.value, valueInput.value);
    showData();
    keyInput.value = '';
    valueInput.value = '';
}
function onClickClearBtn(){
    if (localStorage.length>0) {
        localStorage.clear();
        showData();
    }
    else{
        alert('Nu sunt date in localstorage');
    }
}
function showData() {
    const storageData = document.querySelector("#storageData");
    storageData.innerHTML = '';
    if (localStorage.length === 0) {

        const noData = document.createElement('p');
        noData.innerText = 'Nu exista date in localStorage';
        storageData.append(noData);
    }
    else {
        const itemsList = document.createElement('ul');
        itemsList.classList.add('items');
        storageData.append(itemsList);

        for (let i = 0; i < localStorage.length; i++) {
            const item = document.createElement('li');
            const keyName = localStorage.key(i);
            item.innerText = localStorage.getItem(keyName);
            item.addEventListener('click', () => {
                localStorage.removeItem(keyName);
                showData();
            });
            itemsList.append(item);

        }
    }
}
showData();