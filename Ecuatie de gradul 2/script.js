ecuatie de gradul 2
let a=2;
let b=4;
let c=2;
let mesaj=`Ecuatia de gradul 2 de forma: ${a}*x^2+${b}*x+${c}=0`;
console.log(mesaj);
let delta=b*b-4*a*c;
let sol1=(-b+Math.sqrt(delta))/(2*a);
let sol2=(-b-Math.sqrt(delta))/(2*a);

console.log(`Rezolvare: delta=${delta},x1=${sol1},x2=${sol2}`)


