

//instructiunile if si switch

// if(conditie){
//     //linii de cod daca considita este adevarata
// }
// else{
//     //linii de cod daca conditia este falsa
// }
let age=18;

if (age>18){
    console.log("Major");
}
else if(age===18)
{
    console.log("egal cu 18");
}
else{
    console.log("Minor");
}

let firstName="Mihai";
switch (firstName){
    case "Ana":
        console.log("Numele meu este Ana");
        break;
    case 'Mihai':
        console.log("Numele meu este Mihai");
        break;
    case 'Marius':
        console.log("Numele meu este Marius");
        break;
    case 'Alex':
        console.log("Numele meu este Alex");
        break;
    default: console.log("Numele este necunoscut"); //cand nu exista niciun caz care sa corespunda valorii expresiei
}
let number=1;
while(number<=10){
    console.log(number);
    number++;

}
number=0;
do{
console.log(number);
number++;
}
while (number<=10)
for(let i=1;i<=10;i++){
    console.log(i);
}
for(let j=1;j>0;j--){
    console.log(j);
}
let myArray=["Ana","Mihai","Alina","Cosmin"];
for (let k=0;k<=myArray.length;k++)
    {
    console.log(myArray[k]);
    }
for (let m=myArray.length-1;m>=0;m--)
    {
    console.log(myArray[m]);
    }
index=0;
while(index<=myArray.length)
{
    console.log(myArray[index]);
    index++;
}
console.log("Afisare array cu ajutorul do-while")
let k=0
do{
console.log(myArray[k]);
k++;
}
while (k<myArray.length)
 console.log("instructiunea brake ");
for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);
    if (myArray[i]==="Mihai"){
        break; //iesim din instructiunea repetitiva

    }
}
 console.log("instructiunea continue");
for(let p=0;p<myArray.length;p++)
{
   
    if (myArray[p]==="Mihai"){
        continue; //sare peste un element din array, face ca ceea ce este dupa
        //sa nu se mai execute si forul trece la urmatorul element
        
    }
      console.log(myArray[p]);
}

// ecuatie de gradul 2
// let a=2;
// let b=4;
// let c=2;
// let mesaj=`Ecuatia de gradul 2 de forma: ${a}*x^2+${b}*x+${c}=0`;
// console.log(mesaj);
// let delta=b*b-4*a*c;
// let sol1=(-b+Math.sqrt(delta))/(2*a);
// let sol2=(-b-Math.sqrt(delta))/(2*a);

// console.log(`Rezolvare: delta=${delta},x1=${sol1},x2=${sol2}`)


