const storageForm = document.querySelector("#storageForm");
storageForm.addEventListener("submit", submitStorageForm);
clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", onClickCearBtn);
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
    showData();
}

function onClickCearBtn() {
    if (localStorage.length > 0) {
        localStorage.clear();
    } else {
        alert("Nu sunt date in local storage!");
    }
}
function showData() {
    const storageData = document.querySelector("#storageData");
    storageData.innerHTML = "";
    if (localStorage.length === 0) {
        const noData = document.createElement("p");
        noData.innerText = "Nu exista date in local Storage";
        storageData.append(noData);
    } else {
        const itemsList = document.createElement("ul");
        itemsList.classList.add("items");
        storageData.append(itemsList);

        for (let i = 0; i < localStorage.length; i++) {
            const item = document.createElement("li");

            const keyName = localStorage.key(i); //extragem cheia din local storage
            item.innerText = localStorage.getItem(keyName); //extragem valoarea corespunzatoare cheii keyName

            item.addEventListener("click", () => {
                localStorage.removeItem(keyName); //stergem cheia si valoarea cu cheia keyname
                showData();
            });
            itemsList.append(item);
        }
    }
}
showData();
