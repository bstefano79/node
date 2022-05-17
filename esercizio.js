let v = [
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona2", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona3", costi:1234, spese:2345},
];

let risultato = v.reduce((res,p)=>{
    //nel vettore res è presente la chiave con il nome?
    if(res[p.name]){
        //si è presente aggiungo costi e spese
        res[p.name].costi+=p.costi;
        res[p.name].spese+=p.spese;
    }else{
        //non è presente assegno la l'oggetto alla posizione col nome
        res[p.name] = p;
    }
    //ritorno il vettore
    return res;
    
},[]);
//il vettore risultato lo inizializzo a vettore vuoto []

console.log(risultato);