/* Ecco un altro bellissimo selfwork che vi terra' occupati tutta la serata:
Traccia 3:
Crea un oggetto bowling con le seguenti caratteristiche:
una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
diverse funzionalità tra cui:
creare 10 punteggi casuali per ogni giocatore:
Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
trovare il punteggio finale per ogni giocatore:
Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
determinare il vincitore

EXTRA:
Crea un metodo per stilare la classifica finale dei giocatori

DATI DI PARTENZA:
let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    ...
} */
let bowling = {
    'players': [
        { 'name': 'Livio', 'scores': [] },
        { 'name': 'Paola', 'scores': [] },
        { 'name': 'Filippo', 'scores': [] },
        { 'name': 'Giuseppe', 'scores': [] },
    ],
    /* creare 10 punteggi casuali per ogni giocatore */
    'setScores': function () {
        this.players.forEach(player => {
            for (let i = 1; i <= 10; i++) {
                player.scores.push(Math.floor(Math.random() * 11));
            }
        })
    },
    /* trovare il punteffio finale per ogni giocatore */
    'finalScore': function () {
        this.players.forEach(player => {
            player.finalScore = player.scores.reduce((acc, Element) => acc + Element, 0);
        })
    },
    /* aggiungere un player */
    'addplayer': function (newName) {
        this.players.push({ 'name': newName, 'scores': [] })
    },
    /* Suggerimento: ordinare l’array in ordine Decrescente */
    'foundWinnder': function () {
        this.players.sort((a, b) => b.finalScore - a.finalScore);

        if (this.players[0].finalScore > this.players[1].finalScore) {
            let winner = this.players[0];
            console.log(`il giocatore ${winner.name} ha vinto la partita e ha totalizzato ${winner.finalScore} punti`)
        }
        else {
            let winner1 = this.players[0]
            let winner2 = this.players[1]
            console.log(`i giocatori ${winner1.name} e ${winner2.name} hanno pareggiato`)
        }
    },


}
bowling.addplayer('marco')
bowling.setScores();
bowling.finalScore();
bowling.foundWinnder();
console.log(bowling);
console.log(bowling.players);
