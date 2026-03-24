'use strict';

//===================================================================
//DEVO STAMPARE I NUMERI DA 1 A 100 E "SEGNALARE" I MULTIPLI DI 3 E 5
//===================================================================

//SE i numeri sono divisibili per entrambi stampa FIZZBUZZ

//ALTRIMENTI SE il numero è un mutiplo di 3 stampa FIZZ

//ALTRIMENTI SE il numero è un multiplo di 5 stampa BUZZ

//ALTRIMENTI stampa il numero normale


//LOGICA CICLO
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FIZZBUZZ`);
    } else if (i % 3 === 0) {
        console.log(`FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`BUZZ`);
    } else {
        console.log(i);
    }
}

//VERSIONE CON TERNARI CONCATENATI

// for (let i = 1; i <= 100; i++) {
//     console.log(
//         i % 3 === 0 && i % 5 === 0 ? `FIZZBUZZ` :
//         i % 3 === 0 ? `FIZZ` :
//         i % 5 === 0 ? `BUZZ` :
//         i
//     );
// }
