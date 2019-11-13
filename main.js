// Dichiarazione variabili input
var nome = prompt('Come ti chiami?')

var cognome = prompt("Qual'è  il tuo cognome?")

var colore = prompt("Qual'è  il tuo colore preferito? (digitalo in inglese)")

var numero = prompt("Digita un numero intero: ")

// Creazione password  (le stringhe inserite vengono rese minuscole)
var password = nome.toLowerCase()+cognome.toLowerCase()+colore.toLowerCase()+numero

//Aggiunta messaggio a schermo
document.getElementById('utente').setAttribute("class", "visibile");
document.getElementById('messaggio').setAttribute("class", "visibile");

//Aggiunta identita e password al messaggio a schermo
document.getElementById('identita').innerHTML = nome  + " " + cognome;
document.getElementById('password').innerHTML = password;


//Aggiunta colore della password in base al colore scelto solo se viene scritto in inglese
//document.getElementById('password').style.color = colore;

//Test settaggio di una variabile CSS tramite Javascript
document.getElementById('password').style.setProperty('--colore-password',  colore);
