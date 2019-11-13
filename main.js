// Dichiarazione variabili input
var nome = prompt('Come ti chiami?')

var cognome = prompt("Qual'è  il tuo cognome?")

var colore = prompt("Qual'è  il tuo colore preferito? (digitalo in inglese)")

var numero = prompt("Digita un numero intero: ")

// Creazione password
var password = nome.toLowerCase()+cognome.toLowerCase()+colore.toLowerCase()+numero

//Aggiunta messaggio a schermo
document.getElementById('messaggio').setAttribute("class", "visibile");

//Aggiunta password al messaggio a schermo
document.getElementById('password').innerHTML = password;

//Aggiunta colore della password in base al colore scelto solo se viene scritto in inglese
document.getElementById('password').style.color = colore;
