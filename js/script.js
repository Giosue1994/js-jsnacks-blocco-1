// JSNACK 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// l'utente inserisce il primo numero
var primoNumero = parseInt(prompt('Inserisci il primo numero'));

// l'utente inserisce il secondo numero
var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

// viene stampato il numero maggiore
primoNumero == secondoNumero;
console.log('i numeri sono uguali');

if (primoNumero > secondoNumero ) {
  console.log('stampa', primoNumero);
} else if (secondoNumero > primoNumero) {
  console.log('stampa', secondoNumero);
}
