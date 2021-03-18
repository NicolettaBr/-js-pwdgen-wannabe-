// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21

//dati variabili

alert('Ciao! Benvenuto su questo sito!')

var nomeUtente = prompt( 'Dimmi il tuo nome');
//console.log(nomeUtente);

var cognomeUtente = prompt( 'Dimmi il tuo cognome');
//console.log(cognomeUtente);

var colorePreferito = prompt( 'Qual è il tuo colore preferito?');
//console.log(colorePreferito);

//logica applicazione

var passwordGenerata = 'La tua password è... ' + nomeUtente + cognomeUtente + colorePreferito + '21';

//output

alert(passwordGenerata);

//prova con elementi id
document.getElementById('saluto').innerHTML = "Benvenuti su questo sito!"

document.getElementById('titolo').innerHTML = "Password generator"