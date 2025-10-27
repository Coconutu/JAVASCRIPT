// const tasklist=document.querySelector(".tasks");
// const task4=document.createElement('li');
// const task2=tasklist.children[1];
// task4.innerText="Task 4"; 
// // task4.innerHTML="<strong>Task 4</strong>";
// task4.classList.add("task");
// // task4.classList.remove("task");
// // task4.setAttribute("id","task4");
// // task4.removeAttribute("id");
// tasklist.appendChild(task4); //adaugare la sfarsit
// tasklist.prepend(task4); //adaugare la inceput

// task2.before(task4); //adaugare inainte de task2
// //task2.after(task4);
// console.log(task4);
// task2.remove(); //stergere element
// //tasklist.removeChild(task4); //stergere copil

// task1.after(task2); 
// task4.after(task3);

const addBtn=document.querySelector("#addBtn");

addBtn.addEventListener("click",(event)=>{
    event.preventDefault(); //se previne trimiterea formularului si nu se mai face refresh la pagina
console.log(event);
console.log("mesaj");
})
document.addEventListener("keydown",onKeydown);

function onKeydown(event){
    if (event.keyCode===27){
        console.log("Escape apasat");
        
    }
    else{
        console.log(`S-a apasat alta tasta:`);
    }
}