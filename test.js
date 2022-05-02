/*function funzione1(){
    console.log('ciao sono funzione 1');
}

function funzione2(){
    console.log('ciao sono funzione 2');
}

setTimeout(funzione1,3000);
funzione2();*/

/*const funzione = function stampaMessaggio(){
    console.log('sono una funzione che stampa un messaggio');
}

setTimeout(funzione,3000);*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
  });

const funzione1 = (funzione, eseguif2) => {

    
    console.log('ciao sono funzione 1');
    myPromise.then(() => {
    if(eseguif2) funzione()}).catch(() => console.log('non chiamo la seconda funzione'));
}

const funzione2 = () => console.log('ciao sono funzione 2');


funzione1(funzione2, true);
