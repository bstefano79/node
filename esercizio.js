let v = [
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona2", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona3", costi:1234, spese:2345},
];

let risultato = v.reduce((res,p)=>{
    //nel vettore res è presente la chiave con il nome?
    if(res.key[p.name]!=null){
        //si è presente aggiungo costi e spese
        let key = res.key[p.name];
        res.value[key].costi+=p.costi;
        res.value[key].spese+=p.spese;
    }else{
        //non è presente assegno l'oggetto alla posizione col nome
        let key = res.value.length;
        res.key[p.name] = key;
        res.value[key] = p;
    }
    //ritorno il vettore

    return res;
    
},{key:{}, value : []});
//il vettore risultato lo inizializzo a vettore vuoto []

//console.log(risultato.value);