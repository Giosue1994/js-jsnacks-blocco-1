// // JSNACK 1
// // L’utente inserisce due numeri in successione, con due
// // prompt. Il software stampa il maggiore.
//
// // l'utente inserisce il primo numero
// var primoNumero = parseInt(prompt('Inserisci il primo numero'));
//
// // l'utente inserisce il secondo numero
// var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));
//
// // viene stampato il numero maggiore
// if (primoNumero > secondoNumero ) {
//   console.log('stampa', primoNumero);
// } else if (secondoNumero > primoNumero) {
//   console.log('stampa', secondoNumero);
// } else {
//   primoNumero == secondoNumero;
//   console.log('i numeri sono uguali');
// }



// // JSNACK 2
// // L’utente inserisce due parole in successione, con due
// // prompt. Il software stampa prima la parola più corta, poi la
// // parola più lunga.
//
// // l'utente inserisci la prima parola
// var primaParola = prompt('Inserisci la prima parola');
//
// // l'utente inserisci la seconda parola
// var secondaParola = prompt('Inserisci la seconda parola');
//
// //viene stampata prima la parola più corta poi quella lunga
// if (primaParola.length < secondaParola.length) {
//   console.log('stampa', primaParola);
//   console.log('stampa', secondaParola);
// } else if (secondaParola.length < primaParola.length) {
//   console.log('stampa', secondaParola);
//   console.log('stampa', primaParola);
// } else {
//   primaParola.length = secondaParola.length;
//   console.log('stampa', primaParola, 'e', secondaParola);
// }

// // JSNACK 3
// // Il software deve chiedere per 5 volte all’utente di inserire un
// // numero. Il programma stampa la somma di tutti i numeri
// // inseriti. Esegui questo programma in due versioni, con il for
// // e con il while.
//
// // dichiaro la somma dei numeri partendo da 0
// var somma = 0;
//
// // //versione con for
// // // l'utente inserisce 5 volte un numero
// // for (var i = 0; i < 5; i++) {
// //   var numero = parseInt(prompt('Inserisci un numero'));
// //   console.log(numero);
// //
// //     // viene stampata la somma dei numeri inseriti
// //     somma += numero;
// // }
// //     console.log(somma);
//
// //versione con while
// var i = 0;
//
// while (i < 5) {
//   var numero = parseInt(prompt('Inserisci un numero'));
//   console.log(numero);
//
//   // viene stampata la somma dei numeri inseriti
//   somma += numero;
//   console.log(somma);
//
//   i++;
// }

// // JSNACK 4
// // In un array sono contenuti i nomi degli invitati alla festa del
// // grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// // può partecipare o no alla festa.
//
// // lista dei nomi
// var listaNomi = ['mario', 'alessia', 'paolo', 'martina', 'ernesto', 'rossella'];
// console.log(listaNomi);
//
// var invitato = false;
//
// // chiedo all'utente il suo nome
// var nomeInvitato = prompt('Come ti chiami?');
// console.log(nomeInvitato);
//
// // comunica all'utente se può partecipare o no alla festa
// var i = 0;
// while (i < listaNomi.length) {
//
//   if (nomeInvitato === listaNomi[i]) {
//     invitato = true;
//   }
//
//   i++;
// }
//
// if (invitato === true) {
//     console.log('Puoi entrare, sei invitato');
// } else {
//     console.log('Non sei invitato');
// }

// JSNACK 5
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

// chiedo all'utente di inserire un numero di 4 cifre
var numeroUtente = parseInt(prompt('Inserisci un numero di quattro cifre'));
console.log(numeroUtente);


var arrayNumeroUtente = [];
arrayNumeroUtente.push(numeroUtente);
console.log(arrayNumeroUtente);

var arrayNumeroUtente = numeroUtente.split('');
