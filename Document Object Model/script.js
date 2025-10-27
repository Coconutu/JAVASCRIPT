// const mainTitle=document.getElementById("mainTitle");
// console.log(mainTitle);
// const titles=document.getElementsByClassName("title");
// console.log(titles);
// const items=document.getElementsByTagName("li");
// console.log(items);
// const result=document.querySelector("#mainTitle"); //quesyselector  afiseaza doar primul element!
// console.log(result);
// const resulta=document.querySelector(".title"); //selectam pe baza clasei, punem punct in fata
// console.log(resulta)
// const all=document.querySelectorAll(".title"); //selectam toate elementele cu clasa title
// console.log(all);   

const tasklist=document.querySelector(".tasks");
console.log(tasklist.children);
console.log(tasklist.parentElement);
console.log(tasklist.parentElement.parentElement);
console.log(tasklist.closest(".container"));
const task2=tasklist.children[1];
console.log(task2);
const task1=task2.previousElementSibling; //elementul precedent care se afla la acelasi nivel
console.log(task1); 
const task3=task2.nextElementSibling; //elementul urmator care se afla la acelasi nivel
console.log(task3);


