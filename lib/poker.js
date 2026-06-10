let game = 0;
let round = 0;
let turn = 0;
let tafelAi = document.getElementById("handAi");
let tafelSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("tafelKaarten")
let tafelPot = document.getElementById("pot")
let spelerChips = document.getElementById("chips")
let startR = document.getElementById("startRound");
let startG = document.getElementById("startGame");
let nextG = document.getElementById("nextgame");
let endG = document.getElementById('endGame');
let check = document.getElementById('check');
let fold = document.getElementById('fold');
let raise = document.getElementById('raise');
let chips = 0;
let sChips = 0;
let cashout = 0;
let pot = 0;
let puntS = 0;
let puntA = 0;
let endHandS = 0;
let endHandA = 0;
const startChips = 1000; 
let deck = [];
let kaarten = [
    handSpeler = [],
    handAi = [],
    stafelKaarten = [],
]; 
let suitNums = ["ace_of_hearts", "ace_of_diamonds", "ace_of_clubs", "ace_of_spades", "red_joker"]

startG.addEventListener("click", startGame);
function startGame(){
    game = 1;
    chips = startChips; 
    sChipUpdate();
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
}
function sChipUpdate(){
    sChips = chips;
    spelerChips.children[1].innerHTML = sChips;
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

    puntS = 0;
    puntA = 0;
    round = 1;
    deck = [];
    kaarten = [
        handSpeler = [],
        handAi = [],
        stafelKaarten = [],
    ];

    let i = 0;
    
    while(i < 8){
        for (const numm of suitNums) {
            deck.push(numm);
        }
        console.log(deck);
        i++;
    }

    deck.sort(() => Math.random() - 0.5);

    kaarten[0].push(deck.pop(), deck.pop(), deck.pop(), deck.pop());
    kaarten[1].push(deck.pop(), deck.pop(), deck.pop(), deck.pop());
    kaarten[2].push(deck.pop(), deck.pop(), deck.pop());

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
    tafelSpeler.children[2].src = "img/svg-cards/" + kaarten[0][2] + ".svg"
    tafelSpeler.children[3].src = "img/svg-cards/" + kaarten[0][3] + ".svg"
    tafelAi.children[0].src = "img/svg-cards/redBack.svg"
    tafelAi.children[1].src = "img/svg-cards/redBack.svg"
    tafelAi.children[2].src = "img/svg-cards/redBack.svg"
    tafelAi.children[3].src = "img/svg-cards/redBack.svg"
}
function bordWipe(){
    tafelSpeler.children[0].src = ""
    tafelSpeler.children[1].src = ""
    tafelSpeler.children[2].src = ""
    tafelSpeler.children[3].src = ""
    tafelAi.children[0].src = ""
    tafelAi.children[1].src = ""
    tafelAi.children[2].src = ""
    tafelAi.children[3].src = ""
    tafel.children[0].src = ""
    tafel.children[1].src = ""
    tafel.children[2].src = ""
}

function firstRound () {
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
    tafel.children[0].src = "img/svg-cards/" + kaarten[2][0] + ".svg"
    tafel.children[1].src = "img/svg-cards/" + kaarten[2][1] + ".svg"
    tafel.children[2].src = "img/svg-cards/" + kaarten[2][2] + ".svg"
    
    winCheck();
}
function winCheck(){
    tafelAi.children[0].src = "img/svg-cards/" + kaarten[1][0] + ".svg"
    tafelAi.children[1].src = "img/svg-cards/" + kaarten[1][1] + ".svg"
    tafelAi.children[2].src = "img/svg-cards/" + kaarten[1][2] + ".svg"
    tafelAi.children[3].src = "img/svg-cards/" + kaarten[1][3] + ".svg"
    round = 0;

    endHandS = kaarten[0].concat(kaarten[2]).map(kaart => kaart.split("_of_")[0]);
    endHandA = kaarten[1].concat(kaarten[2]).map(kaart => kaart.split("_of_")[0]);

    checkKind(endHandS, "S");
    checkKind(endHandA, "A");

    if(puntS > puntA){
        chips += pot;
        alert("je wint! " + pot + " chips");
    } else if(puntA > puntS){
        alert("ai wint!");
    } else {
        chips += pot / 2;
        alert("gelijkspel! je krijgt " + pot / 2 + " chips terug");
    }

    tafelPot.children[0].innerHTML = pot;
    endRound();
}
function checkKind(hand, wie){
    let tellingen = {};
    for(let kaart of hand){
        tellingen[kaart] = (tellingen[kaart] || 0) + 1;
    }

    let aantallen = Object.values(tellingen).sort((a, b) => b - a);

    if(aantallen[0] === 7){
        wie === "S" ? puntS = 70 : puntA = 70;
        return;
    }
    if(aantallen[0] === 5){
        wie === "S" ? puntS = 60 : puntA = 60;
        return;
    }
    if(aantallen[0] === 4){
        wie === "S" ? puntS = 50 : puntA = 50;
        return;
    }
    if(aantallen[0] === 3 && aantallen[1] === 2){
        wie === "S" ? puntS = 40 : puntA = 40;
        return;
    }
    if(aantallen[0] === 3){
        wie === "S" ? puntS = 30 : puntA = 30;
        return;
    }
    if(aantallen[0] === 2 && aantallen[1] === 2){
        wie === "S" ? puntS = 20 : puntA = 20;
        return;
    }
    if(aantallen[0] === 2){
        wie === "S" ? puntS = 10 : puntA = 10;
        return;
    }
}
