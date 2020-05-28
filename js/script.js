// JSNACK 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// l'utente inserisce il primo numero
var primoNumero = parseInt(prompt('Inserisci il primo numero'));

// l'utente inserisce il secondo numero
var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

// viene stampato il numero maggiore
if (primoNumero > secondoNumero ) {
  console.log('stampa', primoNumero);
} else if (secondoNumero > primoNumero) {
  console.log('stampa', secondoNumero);
} else {
  primoNumero == secondoNumero;
  console.log('i numeri sono uguali');
}



// JSNACK 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
