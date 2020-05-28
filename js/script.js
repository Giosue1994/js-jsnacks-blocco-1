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



// JSNACK 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// l'utente inserisci la prima parola
var primaParola = prompt('Inserisci la prima parola');

// l'utente inserisci la seconda parola
var secondaParola = prompt('Inserisci la seconda parola');

//viene stampata prima la parola più corta poi quella lunga
if (primaParola.length < secondaParola.length) {
  console.log('stampa', primaParola);
  console.log('stampa', secondaParola);
} else if (secondaParola.length < primaParola.length) {
  console.log('stampa', secondaParola);
  console.log('stampa', primaParola);
} else {
  primaParola.length = secondaParola.length;
  console.log('stampa', primaParola, 'e', secondaParola);
}
