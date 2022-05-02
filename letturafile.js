const fs = require('fs');

fs.readFile('dati.txt','utf8', (err, dati) => {
    if(err){
        throw err;
    }
    console.log(dati);
});