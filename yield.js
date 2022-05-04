let funzione = function* () {
    let i =0;
    while(true){
    console.log('inizio ciclo');
    yield  i;
    i++;
    console.log('fine ciclo');
    }
}
const iteratore = funzione();
console.log('iniziamo........');
console.log(iteratore.next().value);
console.log(iteratore.next().value);
console.log(iteratore.next().value);