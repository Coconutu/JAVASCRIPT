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
//Array - pot avea aceleasi tipuri de date sau diferite
// let myArray=[6,3,1,9,4,10,9];
// console.log(myArray);
// console.log(myArray[2]); 
// console.log(myArray.length); //lungime array
// console.log(myArray[myArray.length-1])
// myArray[1]=13;
// console.log(myArray);
// console.log(myArray.includes(9)); //cautare valoare in array, returneaza true daca valoarea este in array si false daca nu este in array
// console.log(myArray.indexOf(9)); //returneaza primul indexu pe care se afla elemenul
// console.log(myArray.join("="));//facem string din elementele unui array
// reverse la elementele uni array
// console.log(myArray.reverse())
// myArray.push(100); //adaugare element la array la final
// console.log(myArray);
// myArray.unshift(100);//adaugare la inceput
// console.log(myArray); 
//eliminare ultimul element
// let element=myArray.pop();//elimina de la sfarsit si returneaza elementul pe care l-a eliminat
// console.log(element); 
// console.log(`S-a eliminat elementul ${element}`); 
// console.log(myArray);
// let element1=myArray.shift(); //elimina elementul de la inceput
// console.log(myArray);
//eliminam elementele din interior
// let myArray=[6,3,1,9,4,10,9];
// console.log(myArray);
// let element2=myArray.splice(1,5);//elimina 3 elemente incepand cu indexul 1 si afiseaza elementele eliminate
// console.log(`S-a eliminat elementul ${element2}`); 
// console.log(myArray);
// concatenare arrayuri
// let myArray2=[100,101]
// let myArray3=myArray.concat(myArray2); //prima varianta
// console.log(myArray3);

// let myArray4 =[...myArray,...myArray2];//a doua varianta - spread operator
// console.log(myArray4);

//DATE CALENDARISTICE
// let currentDate=new Date(); //creare obiect ca si in Java
// console.log(currentDate);
// console.log(typeof currentDate);

// let date2=new Date(2023,11,17);
// console.log(date2);

// let date3=new Date("2023-12-20 10:50:35");
// console.log(date3);

// console.log(date3.getFullYear()); //paranteze rotunde pentru ca e o metoda
// console.log(date3.getMonth());
// console.log(date3.getDate());
// console.log(date3.getHours());
// console.log(date3.getMinutes());
// console.log(date3.getSeconds());

// date3.setDate(25); //cum setam data ?, setfullyear, sethours
// console.log(`date3 este ${date3.getDate()}`);
//cat timp a trecut intre doua date ?
// let date1=new Date(2023,11,10);
// let date2=new Date(2023,11,20);
// let dateDiff=date2-date1; //numarul de milisecunde care a trecut intre aceste date
// console.log(dateDiff/(1000*60*60*24)); //convertim in zile

//instructiunile if si switch

// if(conditie){
//     //linii de cod daca considita este adevarata
// }
// else{
//     //linii de cod daca conditia este falsa
// }
// let age=18;

// if (age>18){
//     console.log("Major");
// }
// else if(age===18)
// {
//     console.log("egal cu 18");
// }
// else{
//     console.log("Minor");
// }

// let firstName="Mihai";
// switch (firstName){
//     case "Ana":
//         console.log("Numele meu este Ana");
//         break;
//     case 'Mihai':
//         console.log("Numele meu este Mihai");
//         break;
//     case 'Marius':
//         console.log("Numele meu este Marius");
//         break;
//     case 'Alex':
//         console.log("Numele meu este Alex");
//         break;
//     default: console.log("Numele este necunoscut"); //cand nu exista niciun caz care sa corespunda valorii expresiei
// }
// let number=1;
// while(number<=10){
//     console.log(number);
//     number++;

// }
// number=0;
// do{
// console.log(number);
// number++;
// }
// while (number<=10)
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// for(let j=1;j>0;j--){
//     console.log(j);
// }
// let myArray=["Ana","Mihai","Alina","Cosmin"];
// for (let k=0;k<=myArray.length;k++)
//     {
//     console.log(myArray[k]);
//     }
// for (let m=myArray.length-1;m>=0;m--)
//     {
//     console.log(myArray[m]);
//     }
// index=0;
// while(index<=myArray.length)
// {
//     console.log(myArray[index]);
//     index++;
// }
// console.log("Afisare array cu ajutorul do-while")
// let k=0
// do{
// console.log(myArray[k]);
// k++;
// }
// while (k<myArray.length)
//  console.log("instructiunea brake ");
// for(let i=0;i<myArray.length;i++)
// {
//     console.log(myArray[i]);
//     if (myArray[i]==="Mihai"){
//         break; //iesim din instructiunea repetitiva

//     }
// }
//  console.log("instructiunea continue");
// for(let p=0;p<myArray.length;p++)
// {
   
//     if (myArray[p]==="Mihai"){
//         continue; //sare peste un element din array, face ca ceea ce este dupa
//         //sa nu se mai execute si forul trece la urmatorul element
        
//     }
//       console.log(myArray[p]);
// }

//ecuatie de gradul 2
// let a=2;
// let b=4;
// let c=2;
// let mesaj=`Ecuatia de gradul 2 de forma: ${a}*x^2+${b}*x+${c}=0`;
// console.log(mesaj);
// let delta=b*b-4*a*c;
// let sol1=(-b+Math.sqrt(delta))/(2*a);
// let sol2=(-b-Math.sqrt(delta))/(2*a);

// console.log(`Rezolvare: delta=${delta},x1=${sol1},x2=${sol2}`)

//FUNCTII


