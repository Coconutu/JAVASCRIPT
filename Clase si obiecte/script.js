function afiseaza(text){
    console.log(text);
}

// let person={ //obiect 1
//     firstName:"Paul",
//     lastName:"Pop",
//     age:20,
//     sayHello:function(){
//         afiseaza(`Numele este:${this.firstName} ${this.lastName}`)
//     }
// }

// let person2={ //obiect 2
//     firstName:"Mihai",
//     lastName:"Ardelean",
//     age:30
//     }
// afiseaza(person.firstName);
// person.sayHello();
// person2.sayHello();
class Person{ //clasa
    //proprietati
firstName;
lastName;
age;

    //constructor
constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

    //metode (functie)
sayHello(){
    afiseaza(`Numele este:${this.firstName} ${this.lastName}, si am ${this.age} ani.`);
}

}

let p=new Person("Mihai","Popescu",25);
afiseaza(p.firstName);
p.sayHello();
let q=new Person("Valentin","Ionescu",23);
q.sayHello();
let r=new Person("Ana","Marin",28);
r.sayHello();