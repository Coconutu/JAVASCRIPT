const valoareDificultate = document.querySelector('#dificultate'); //dificultate.value=100
valoareDificultate.addEventListener('change', () => {
    rezultatCorect = genereazaIntrebare();
});
function genereazaIntrebare() {
    let a = Math.floor(Math.random() * valoareDificultate.value);
    let b = Math.floor(Math.random() * valoareDificultate.value);
    const intrebare = document.querySelector('#intrebare');
    intrebare.innerText = `Cat face ${a} + ${b} ?`;
    return a + b;
}
let rezultatCorect = genereazaIntrebare();

const calculForm = document.querySelector("#calcForm");
calculForm.addEventListener("submit", verificaRezultat);

function verificaRezultat(event) {
   event.preventDefault();
   const userRezultat = document.querySelector("#userRezultat");
   if (!userRezultat.value) {
       alert('Te rugam sa introduci un rezultat!');
       return;
   }
   else if (userRezultat.value == rezultatCorect) {
       alert('Raspuns corect! Felicitari!');
       
   }
   else{
    alert('Raspuns gresit! Mai incearca!');

   }

   console.log(`rezultatCorect: ${rezultatCorect}`);
   console.log(`userRezultat: ${userRezultat.value}`);
    userRezultat.value = '';
   rezultatCorect = genereazaIntrebare();
}