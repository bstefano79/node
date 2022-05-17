let v = [
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona2", costi:1234, spese:2345},
    { name:"persona1", costi:1234, spese:2345},
    { name:"persona3", costi:1234, spese:2345},
];

let risultato = v.reduce((res,p)=>{
    if(res[p.name]){
        res[p.name].costi+=p.costi;
        res[p.name].spese+=p.spese;
    }else{
        res[p.name] = p;
    }
    return res;
    
},[]);

console.log(risultato);