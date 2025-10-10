//alert("Acesta este codul meu de javascript");  
//console.log("acesta este un mesaj");
//console.warn("Atentie");
//console.error("Eroare");
//declaram variabila folosind var, let, const
//let myNumber = 2; //declaram variabila si nu mai e nevoie sa o declaram din nou
//console.log(myNumber);
//myNumber = 10;
//console.log(myNumber);
//const age=10 //nu se poate modifica
//console.log(age);
//let message;
//console.log(message); //va afisa undefined deoarece nu a fost atribuita nicio valoare dupa declaratie

//Reguli de denumire
//1. numele poate sa contuina doar litere, cifre, _ sau $
//2. nu poate fi un cuvant cheie, nu are spatii, nu poate incepe cu o cifra,nu contine cuvinte cheie
//3. numele trebuie sa fie cat mai sugestive
//diferent dintre var si let este data de ciclul de viata al variabilei
//var poate fi accesat si in exteriorul blocului, vizibil in tot fisierul de javascript (variabila globala)
//let poate fi accesat doar in interiorul blocului, vizibile doar in bloc(variabila locala)
//este de oreferat sa nu folosim var
//{
//    let firstName="Marius"; 
//    console.log(firstName);

//}
//console.log(firstName);

//TIPURI DE DATE PRIMITIVE

//boolean - stocheaza true sau false
// let isActive = true;
// console.log(typeof isActive);
//number
// let myNumber = 10.3;
// console.log(typeof myNumber);
//big int - mai rar intalnite pt a stoca numere foarte mari-unde nu poate fi folosit number
//symbol - mai rar pt a crea valori unice
//string - sir de caractere
// let fullName="Rares Petrisor";
// console.log(typeof fullName);
//null
// let myNull=null;
// console.log(typeof myNull);
//undefined
// let myUndefined;
// console.log(typeof myUndefined);


//TIPURI DE DATE REFERINTA  
//     //ARRAY-URI
//     //OBIECTE - COLECTIE DE PROPRIETATI 


//     let person={
//         firstName:"Alex",
//         lastName:"Pop",
//         age:30
//     };
// console.log(typeof person);

//         //FUNCTII
//     //DATE CALENDARISTICE
//     //EXPRESII REGEX- TOPIC MAI COMPLEX
let firstNumber={value:1};
let secondNumber=firstNumber;
console.log(firstNumber);
console.log(secondNumber);

secondNumber.value=10;
console.log(firstNumber);
console.log(secondNumber);
// firstNumber=10;
// secondNumber=firstNumber;
// console.log(firstNumber);
// console.log(secondNumber);

//OPERATORI IN JAVASCRIPT