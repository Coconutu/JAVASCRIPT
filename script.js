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
// let firstNumber={value:1};
// let secondNumber=firstNumber;
// console.log(firstNumber);
// console.log(secondNumber);

// secondNumber.value=10;
// console.log(firstNumber);
// console.log(secondNumber);
// firstNumber=10;
// secondNumber=firstNumber;
// console.log(firstNumber);
// console.log(secondNumber);

//OPERATORI IN JAVASCRIPT
//aritmetici +,-,*,/, % pt rest ++,--
// let firstName=10;
// let secondNumber=2;
// console.log(firstName+secondNumber);
// console.log(firstName-secondNumber);
// console.log(firstName*secondNumber);
// console.log(firstName/secondNumber);
// console.log(firstName%secondNumber);
// let myNumber=1;
// myNumber++; //myNumber=myNumber+1 , incrementare
// myNumber--; //decrementare
// console.log(myNumber);

//OPERATORII DE COMPARATIE
//<,<=<>,>=,==,!=,===,!==
// let firstName=10;
// let secondNumber="10";
// console.log(firstName>secondNumber);
// console.log(firstName<=secondNumber);
// console.log(firstName==secondNumber);
// console.log(firstName===secondNumber);
// daca folosim ==, se compara valoarea celor doua variabile
///daca folosim === se compara atat valoarea, cat si tipul de date, astfel ele nu mai sunt egale (numar vs string)

//OPERATORI LOGICI
// &&(AND), || (OR),! (NOT) 
// let expression1=3>5; //false
// let expression2=1<=2; //true
// console.log(expression1 && expression2); //expresia este adevarata daca ambele sunt adevarate
// console.log(expression1 ||  expression2); //expresia adevarata daca vel putin una este adevarata
// console.log(!expression1);

//OPERATORUL DE ATRIBUIRE =, -+, +=,*=, /=, %=
//atribuim o valoare unei variabile

// let firstNumber=10;
// firstNumber -=5; // firstnumber=firstnuiber-5;
// console.log(firstNumber);
//operatorul de concatenare
// let firstName="Alex";
// let secondName="Pop";
// let fullName=firstName+" "+secondName;
// console.log(fullName);

//operatorul ternar
//expresie ?<exp adevarata> :<exp falsa>
//let result =3<5 ?"adevarat":"fals";
// console.log(result);
//SIRURI DE CARACTERE -stringuri
// let firstName='Alex';
// console.log(firstName);
// console.log(firstName[0]) //pun pozitia lui din string, numaratoarea incepe de la 0
// console.log(firstName.length);
// let lastName="Pop";
// let fullName=firstName+" "+lastName;
// console.log(fullName);
// console.log(lastName.includes("o")); //verificam daca un string este inclus in altul
// console.log(lastName.indexOf("o")); //verificam daca un string este inclus in altul, prin verificarea cu indexOf
// let message="Acesta este un mesaj";
// let message2=message.replace('mesaj','text');//inlocuim un string cu alt string
// console.log(message);
// console.log(message2); 
// //functia trim ne ajuta sa eliminam spatiile de la inceput si sfarsit
// console.log(message.trimStart()); //eloimina de la inceput
// console.log(message.trimEnd()); //elimina de la sfarsit
// console.log(message.trim()); //elimina si de la inceput si de la sfarsit
// let arr=message.split(" "); //impartirea stringului
// console.log(arr); //arr este un array cu 4 elemente care sunt cuvintele stringului
// console.log(arr[0]); //acces la elementele arrayului
// console.log(arr[1]); //acces la elementele arrayului
// let newMessage=arr.join(","); //refacere string original
// console.log(newMessage);
// let message='Acesta "este" un mesaj';
// console.log(message);
// message="Acesta \"este\" un mesaj"; //am facut Escape la caracterele speciale
// console.log(message);
//interpolarea stringurilor
// let firstName="Alex";
// let lastName= "Pop";
// let message=`Numele meu este: ${firstName},${lastName}`; //folosim caracterul ` (stanga lui 1)
// console.log(message);