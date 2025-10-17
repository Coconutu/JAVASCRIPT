// function myFunction1(a,b){ //semnatura functiei
//    return a+b; //intre acolade corpul functiei
// }
// let firstNumber=4;
// let secondNumber=8;
// result=myFunction1(firstNumber,secondNumber);
// console.log(result);

// //functie anonima,careia ii putem schimba comportamentul
// let sum=function(a,b){ 
//     return a+b;
// }
// console.log(sum(4,10));

// sum=function(a,b){
//     return a*b;
// }
// console.log(sum(4,10));

// //arrow function
// let suma=(a,b)=>a+b; //daca avem doar o instructione, putem elimina parantezele
// console.log(suma(4,10));

// let person={
//     firstName:"Alex",
//     lastName:"Pop",
//     age:40
// };
// let person2={
//     firstName:"Mihai",
//     lastName:"Ionescu",
//     age:50
// };
// // console.log(`Nume complet:${person.firstName} ${person.lastName}`)
// // console.log(`Varsta:${person.age}`)
// // console.log(`Nume complet:${person2.firstName} ${person2.lastName}`)
// // console.log(`Varsta:${person2.age}`)

function afiseaza(text){
    console.log(text);
}

// afiseaza("Apelare functie displayDetails");

// displayDetails(person);
// displayDetails(person2);

// function displayDetails(personObject){
//     console.log(`Nume complet:${personObject.firstName} ${personObject.lastName}`)
//     console.log(`Varsta:${personObject.age}`)
    
// }

// let number=1;
// function myFunction(){
//     let rezultat=number+10;
//     afiseaza(`Valoarea pentru result este ${result}`);
//     }
// myFunction();
// afiseaza(rezultat); //not defined pentru ca incercam sa apelam o variabila care poate fi accesata doar in interiorul functiei
//putem accesa variabilele din afara in functie, dar invers nu merge.
//Variabila result este locala. number este globala, deoarece poate fi accesata de oriunde
afiseaza("myFunction1");
let value=[1];

function myFunction1(param){
    param.push(2);
    afiseaza(`Valoarea lui param este ${param}`);
}
myFunction1(value);
afiseaza(`Valoarea lui value este ${value}`);
//cand trimitem variabile primitive la o functie, ele nu se modifica decat oin interiorul functiei
//cand trimitem variabile referinta, orice modificare in cadrul functiei se reflecta si in exteriorul functiei
//TRATARE EROORI