'use strict';

console.log(`
    PSEUDOCODICE

    PER OGNI NUMERO DA 1 A 100:
      -SE il numero è multiplo di entrambi stampa FIZZBUZZ
      -ALTRIMENTI SE il numero è un multiplo di 3 stampa FIZZ
      -ALTRIMENTI SE il numero è un multiplo di 5 stampa BUZZ
      -ALTRIMENTI stampa il numero
      `
);

//LOGICA CICLO
// Inizia il ciclo
// (Let i = 1) partiamo dal numero 1 | (i <= 100) continua fino ad arrivare al numero 100 | (i++) ad ogni giro aggiungi 1 alla i 
for (let i = 1; i <= 100; i++) {

    //SE il MODULO di 15 (che è il numero più piccolo intero multiplo sia di 3 che di 5) è uguale a 0, stampiamo FIZZBUZZ
    if (i % 15 === 0) {
        console.log(`FIZZBUZZ`);
        //ALTRIMENTI SE solo il MODULO di 3 risulta 0 stampiamo FIZZ
    } else if (i % 3 === 0) {
        console.log(`FIZZ`);
        //ALTRIMENTI SE solo il MODULO di 5 risulta 0 stampiamo BUZZ
    } else if (i % 5 === 0) {
        console.log(`BUZZ`);
        //ALTRIMENTI stampiamo il valore numerico
    } else {
        console.log(i);
    }
}

//============================================
//VERSIONE CON TERNARI CONCATENATI
//============================================

// for (let i = 1; i <= 100; i++) {
//     console.log(
//         i % 15 === 0 ? `FIZZBUZZ` :
//         i % 3 === 0 ? `FIZZ` :
//         i % 5 === 0 ? `BUZZ` :
//         i
//     );
// }
