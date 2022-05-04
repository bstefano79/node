let funzione = function* () {
    let i =0;
    while(true){
    yield  i;
    i++;
    }
}
const iteratore = funzione();
console.log(iteratore.next().value);
console.log(iteratore.next().value);
console.log(iteratore.next().value);