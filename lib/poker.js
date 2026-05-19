let game = 0;
let round = 0;
let tafelAi = document.getElementById("handAi");
let tafelSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("pokerTafel")
let startR = document.getElementById("startRound");
let startG = document.getElementById("startGame");
let endG = document.getElementById('endGame');
let chips = 0;
let cashout = 0;
let pot = 0;
const startChips = 500; 
let deck = [];
let kaarten = [
    handSpeler = [],
    handAi = [],
    stafelKaarten = [],
];
let suit = ["hearts", "diamonds", "clubs", "spades"];
let nummers = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];


startG.addEventListener("click", startGame);
function startGame(){
    game = 1;
    chips = startChips; 
    console.log(chips);
}

endG.addEventListener("click", cashOut);
function cashOut() {
    cashout = chips;
    chips = 0;
    console.log(cashout);
    console.log(chips);
    game = 0;
}


startR.addEventListener("click", startRound);
function startRound(){
    round = 1;
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
    startcash();
    console.log(chips);
    console.log(pot);
    bordSetup();
}
    function startcash(){
        if(chips <= 10){
            alert("you have to little chips to play. you have to cash out.");
            cashOut();  
        }else if (chips <= 100){
            pot += chips += chips;
            chips -= chips;
        }else{
            chips -= 100;
            pot += 200;
        }
    }
    function bordSetup(){
        tafelSpeler.children[0].src = "img/svg-cards/" + kaarten[0][0] + ".svg"
        tafelSpeler.children[1].src = "img/svg-cards/" + kaarten[0][1] + ".svg"
        tafelAi.children[0].src = "img/svg-cards/red_joker.svg"
        tafelAi.children[1].src = "img/svg-cards/red_joker.svg"
    }



