let game = 0;
let round = 0;
let turn = 0;
let tafelAi = document.getElementById("handAi");
let tafelSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("tafelKaarten")
let tafelPot = document.getElementById("pot")
let startR = document.getElementById("startRound");
let startG = document.getElementById("startGame");
let nextG = document.getElementById("nextgame");
let endG = document.getElementById('endGame');
let check = document.getElementById('check');
let fold = document.getElementById('fold');
let raise = document.getElementById('raise');
let chips = 0;
let cashout = 0;
let pot = 0;
let handS = [];
let handA = [];
let puntS = 0;
let puntA = 0;
let waardenS = 0;
let waardenA = 0;
const startChips = 1000; 
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
    startG.style.display = "none";
    document.getElementById("startBox").style.display = "none";
}

endG.addEventListener("click", cashOut);
function cashOut() {
    cashout = chips;
    chips = 0;
    console.log(cashout);
    console.log(chips);
    bordWipe();
    game = 0;
    round = 0;
    turn = 0;
    location.reload();
}
function endRound() {
    bordWipe();
    pot = 0;
    tafelPot.children[0].innerHTML = pot;
    game = 1;
    round = 0;
    turn = 0;
    puntA = 0;
    puntS = 0;
}

startR.addEventListener("click", startRound);
function startRound(){
    if (game === 0) {
        alert("start game first");
        return;
    }
    if(round != 0){
        alert("finish the game or fold!");
        return;
    }
    bordWipe();
    
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
    if (game === 0 ) return;
    console.log(chips);
    console.log(pot);
    setTimeout(bordSetup, 1000);
    setTimeout(firstRound, 2000);
}

function startcash(){
    if(game === 0) return;
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
    tafelPot.children[0].innerHTML = pot;
    
}



function bordSetup(){
    tafelSpeler.children[0].src = "img/svg-cards/" + kaarten[0][0] + ".svg"
    tafelSpeler.children[1].src = "img/svg-cards/" + kaarten[0][1] + ".svg"
    tafelAi.children[0].src = "img/svg-cards/red_joker.svg"
    tafelAi.children[1].src = "img/svg-cards/red_joker.svg"
}
function bordWipe(){
    tafelSpeler.children[0].src = ""
    tafelSpeler.children[1].src = ""
    tafelAi.children[0].src = ""
    tafelAi.children[1].src = ""
    tafel.children[0].src = ""
    tafel.children[1].src = ""
    tafel.children[2].src = ""
    tafel.children[3].src = ""
    tafel.children[4].src = ""
}

function firstRound () {
    tafel.children[0].src = "img/svg-cards/" + kaarten[2][0] + ".svg"
    tafel.children[1].src = "img/svg-cards/" + kaarten[2][1] + ".svg"
    tafel.children[2].src = "img/svg-cards/" + kaarten[2][2] + ".svg"
    turn = 1;
}

check.addEventListener("click", checking);
function checking(){
    if(turn === 1){
        if(round === 1){
            round = 2;
            turn = 0;
            console.log(turn);
            setTimeout(round2, 1000);
        }else{
            turn = 0;
            console.log(turn);
            setTimeout(winCheck, 1000);
        }
    }else{
        return;
    }
}
raise.addEventListener("click", raiseing);
function raiseing(){
    if(turn === 1){
        if (chips < 50){
            return;
        }
        if(round === 1){
            let raises = prompt("enter amount (minimum 50 chips)");
            let getal = Number(raises);
            if (getal > chips){
                alert(`enter an amount that you have (chips: ${chips})`)
                return;
            }
            if (getal === null || raises === "") {
                alert("User cancelled the prompt.");
                return;
            } else if (getal < 50 || getal > 500) {
                alert("amount must be between 50 and 500 chips");
                return;
            } else if (!isNaN(getal)) {
                round = 2;
                turn = 0;
                pot = pot + getal + getal;
                tafelPot.children[0].innerHTML = pot;
                console.log(pot);
                console.log(turn);
                setTimeout(round2, 1000);
            } else {
                alert("amount must be a number");
                return;
            }
        }else{
            let raises = prompt("enter amount (minimum 50 chips and a maximum of 500 chips)");
            let getal = Number(raises);
            if (getal > chips){
                alert(`enter an amount that you have (chips: ${chips})`)
                return;
            }
            if (getal === null || raises === "") {
                alert("User cancelled the prompt.");
                return;
            } else if (getal < 50 || getal > 500) {
                alert("amount must be between 50 and 500 chips");
                return;
            } else if (!isNaN(getal)) {
                turn = 0;
                pot = pot + getal + getal;
                tafelPot.children[0].innerHTML = pot;
                console.log(pot);
                console.log(turn);
                setTimeout(winCheck, 1000);
            } else {
                alert("amount must be a number");
                return;
            }
        }
    }else{
        return;
    }
}
fold.addEventListener("click", folding);
function folding(){
    if(turn === 1){
        pot = 0;
        turn = 0;
        console.log(turn);
        endRound();
        if (game === 0 ) return;
    }else{
        return;
    }
}

function round2(){
    tafel.children[3].src = "img/svg-cards/" + kaarten[2][3] + ".svg"
    tafel.children[4].src = "img/svg-cards/" + kaarten[2][4] + ".svg"
    turn = 1;
}
function winCheck(){
    tafelAi.children[0].src = "img/svg-cards/" + kaarten[1][0] + ".svg"
    tafelAi.children[1].src = "img/svg-cards/" + kaarten[1][1] + ".svg"
    console.log("calk");
    round = 0;   
    

    for (let kaartS of kaarten[0]){
    handS = handS.concat(kaartS.split("_of_"));
    }
    for (let kaartBord of kaarten[2]){
        handS = handS.concat(kaartBord.split("_of_"));
    }

    for (let kaartAi of kaarten[1]){
        handA = handA.concat(kaartAi.split("_of_"));
    }
    for (let kaartBord of kaarten[2]){
        handA = handA.concat(kaartBord.split("_of_"));
    }
    console.log(handA);
    console.log(handS);
    waardenS = handS.map(reNumber).filter(waarde => waarde !== null);
    if(waardenS.includes(14)){
        waardenS.push(1);
    }
    waardenA = handA.map(reNumber).filter(waarde => waarde !== null);
    if(waardenA.includes(14)){
    waardenA.push(1);
    }
    checkStreatFlush();
    check4kind();
    checkFullHous();
    checkFlush();
    checkStreat();
    check3kind();
    check2pair();
    check1pair();
    highKart();
}
function reNumber(kaart){
    let waarden = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "jack":11, "queen":12, "king":13, "ace":14, "hearts":null, "diamonds":null, "clubs":null , "spades":null};
    console.log(waardenA + waardenS+"njewhjwkfn")
    return waarden[kaart];
}
function checkStreatFlush(){ 
    let straitA = waardenA.sort((a, b) => a - b);
    let straitS = waardenS.sort((a, b) => a - b);
    if (straitA){

    }

    puntS = 9;
}
function check4kind(){}
function checkFullHous(){}
function checkFlush(){}
function checkStreat(){}
function check3kind(){}
function check2pair(){}
function check1pair(){}
function highKart(){}