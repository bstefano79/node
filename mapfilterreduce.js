let vettore = [1,2,4,5,-3,7,8];

let output = vettore.map((val)=>val*2);

//console.log(output);

output = vettore.filter((x)=>x%2==0);

//console.log(output);

let somma = vettore.reduce((sum,val)=>sum+val,0);

//console.log(somma);

let minimo = vettore.reduce((min,val)=>val<min?val:min,vettore[0]);

//console.log(minimo);

vettore =[{nome:'stefano'},{nome:'stefano'},{nome:'marco'},{nome:'stefano'},{nome:'marco'},{nome:'luca'}];

output = vettore.reduce((output,val)=>{
    output[val.nome]?++output[val.nome]:output[val.nome]=1;
    return output;
},[]);

console.log(output);//[ stefano: 3, marco: 2, luca: 1 ]
