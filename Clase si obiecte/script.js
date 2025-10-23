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
    //proprietati publice. CA sa le facem private, punem # in fata numelui
    //Daca proprietatile sunt private, nu mai pot fi accesate din exteriorul clasei
    //se folosesc getter si setter pentru a accesa si modifica proprietatile private
#firstName;
#lastName;
#age;

    get firstName(){
    return this.#firstName;
    }
    set firstName(value){
        this.#firstName=value;
    }
    get lastName(){
        return this.#lastName;
    }
    set lastName(value){
        this.#lastName=value;
    }   
    get age(){
        return this.#age;
    }           
    set age(value){
        this.#age=value;
    }



    //constructor
constructor(firstName,lastName,age){
    this.#firstName=firstName;
    this.#lastName=lastName;
    this.#age=age;
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
class Masina{
    marca;
    model;
    motor;
    constructor(marca,model,motor){
        this.marca=marca;
        this.model=model;
        this.motor=motor;
    }
    afiseazaDetalii(){
        afiseaza(`Masina este marca ${this.marca}, model ${this.model}, motor ${this.motor}.`);

    }
}

let m=new Masina("Dacia","Logan","1.4");
m.afiseazaDetalii();
let n=new Masina("Ford","Focus","2.0");
n.afiseazaDetalii();
let o=new Masina("Toyota","Corolla","1.8");
o.afiseazaDetalii();
class Padure{
 nume;
 suprafata;
 numarCopaci;
 constructor(nume,suprafata,numarcopaci){
    this.nume=nume;
    this.suprafata=suprafata;
    this.numarCopaci=numarcopaci;

 }
 afiseazaDetalii(){
    afiseaza(`Padurea ${this.nume} are suprafata de ${this.suprafata} hectare si ${this.numarCopaci} copaci.`);
 }    
}
let padure1=new Padure("Codrii Vladei",1500,200000);
padure1.afiseazaDetalii();