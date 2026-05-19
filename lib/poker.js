


let handAi = document.getElementById("handAi");
let handSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("pokerTafel")
let startR = document.getElementById("startRound");
let startG = document.getElementById("startGame");
let endG = document.getElementById('endGame');
let chips = 0;
let cashout = 0;
let pot = 0;
const startChips = 50000; 


startG.addEventListener("click", startAmount);
endG.addEventListener("click", cashOut);
startR.addEventListener("click", startRound);

function cashOut() {
    cashout = chips;
    chips = 0;
    console.log(cashout);
    console.log(chips);
}
function startAmount(){
    chips = startChips; 
    console.log(chips);
}
function startRound(){
    Math.floor(Math.random() * 52 + 1);
}

let deck = [];
let suit = ["hearts", "diamonds", "clubs", "spades"];
let nummers = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];

// Maak alle 52 kaarten aan
for (let suits of suit) {
    for (let value of nummers) {
        deck.push(value + "_of_" + suits);
    }
}

// Schud het deck door elke kaart op een willekeurige plek te zetten
deck.sort(() => Math.random() - 0.5);

// Trek een kaart van het deck
// .pop() pakt de laatste kaart en verwijdert hem uit het deck
let card = deck.pop();
console.log(card); // bijvoorbeeld: "A_of_spades"