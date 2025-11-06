const calcForm=document.querySelector('#calcForm');
calcForm.addEventListener('submit',verificaRezultat);
function verificaRezultat(event){
    event.preventDefault(); 
    let a=Math.floor(Math.random() * 101);
    let b=Math.floor(Math.random() * 101);   
    const intrebare=document.createElement('h1')
    intrebare.innerText=`Cat face ${a} + ${b} ?`;
    const textcalcule=document.querySelector('#textcalcule');
    textcalcule.innerHTML='';
    textcalcule.appendChild(intrebare); 

    const rezultat=document.querySelector('#rezultat');
    if(!rezultat.value){
        alert('Te rugam sa introduci un rezultat!');
        return;
    }
    const userRezultat=parseInt(rezultat.value);
    const corectRezultat=a+b;
    

}



