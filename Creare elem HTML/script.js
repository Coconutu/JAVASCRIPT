const tasklist=document.querySelector(".tasks");
const task4=document.createElement('li');
const task2=tasklist.children[1];
task4.innerText="Task 4"; 
// task4.innerHTML="<strong>Task 4</strong>";
task4.classList.add("task");
// task4.classList.remove("task");
// task4.setAttribute("id","task4");
// task4.removeAttribute("id");
tasklist.appendChild(task4);
tasklist.prepend(task4);

task2.before(task4);
task2.after(task4);
console.log(task4);
task2.remove();
tasklist.removeChild(task4);
//19:39
//https://www.youtube.com/watch?v=m_q4cKZjGxk&list=PL7aWL1nkGk0ytE-fV1pApIdKI2ZwIyw-5&index=13
