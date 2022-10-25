const mails = ["nicholas@gmail.com" , "nicho92@gmail.com" , "nicholas.peara@gmail.com"];

// Chiedi all’utente la sua email,

const mail = prompt("Inserisci la tua e-mail");

// controlla che sia nella lista di chi può accedere,
let index = mails.indexOf(mail);

console.log(index);

// stampa un messaggio appropriato sull’esito del controllo.

if ( index >= 0 ) {
    alert("La mail indicata è presente");
} else {
    alert("La mail indicata non è presente");

}

