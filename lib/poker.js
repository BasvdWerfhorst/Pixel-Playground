let tafelAi = document.getElementById("handAi");
let tafelSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("pokerTafel")
let startR = document.getElementById("startRound");
let startG = document.getElementById("startGame");
let endG = document.getElementById('endGame');
let chips = 0;
let cashout = 0;
let pot = 0;
const startChips = 50000; 
let deck = [];
let kaarten = [
    handSpeler = [],
    handAi = [],
    stafelKaarten = [],
];
let suit = ["hearts", "diamonds", "clubs", "spades"];
let nummers = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];



startG.addEventListener("click", startGame);
endG.addEventListener("click", cashOut);
startR.addEventListener("click", startRound);

function cashOut() {
    cashout = chips;
    chips = 0;
    console.log(cashout);
    console.log(chips);
}
function startGame(){
    chips = startChips; 
    console.log(chips);
    
}
function startRound(){
    deck = [];
    kaarten = [
        handSpeler = [],
        handAi = [],
        stafelKaarten = [],
    ];

    for (let suits of suit) {
        for (let value of nummers) {
            deck.push(value + "_of_" + suits);
        }
    }

    deck.sort(() => Math.random() - 0.5);

    kaarten[0].push(deck.pop(), deck.pop());
    kaarten[1].push(deck.pop(), deck.pop());
    kaarten[2].push(deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop());

    console.log(kaarten);
    console.log(deck);
}



