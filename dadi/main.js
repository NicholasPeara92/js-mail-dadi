// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

alert("Sei pronto a sfidare il computer a dadi?");

const userDice = Math.floor(Math.random() * 6) + 1;

const cpuDice = Math.floor(Math.random() * 6) + 1;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (userDice > cpuDice) {
    alert("Hai vinto!!!");
    console.log("Il il giocatore ha vinto con" , userDice);
    console.log("Il computer ha perso con" , cpuDice);
    
} else if (userDice < cpuDice) {
    alert("Hai perso!!!");
    console.log("Il il giocatore ha perso con" , userDice);
    console.log("Il computer ha vinto con" , cpuDice);

} else {
    alert("Pareggio!!!");
    console.log("Il giocatore e il computer hanno pareggiato con" , userDice);

}
