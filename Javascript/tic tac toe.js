let game = 0;
let round = 0;
let turn = 0;
let draw = 0;
let speler_speler2 = 0;
const speler1 = "x";
const speler2 = "o";
let speler1Punten = [];
let speler2Punten = [];

let een = document.getElementById("1-1");
let twee = document.getElementById("1-2");
let drie = document.getElementById("1-3");
let vier = document.getElementById("2-1");
let vijf = document.getElementById("2-2");
let zes = document.getElementById("2-3");
let zeven = document.getElementById("3-1");
let acht = document.getElementById("3-2");
let negen = document.getElementById("3-3");

let ticTacToe = document.getElementById("tic-tac-toe")
let next = document.getElementById("nextround-ticTacToe");
let text = document.getElementById("ticTacToe-turn");

const vakjes = {
    1: een,
    2: twee,
    3: drie,
    4: vier,
    5: vijf,
    6: zes,
    7: zeven,
    8: acht,
    9: negen
};

for (let i = 1; i < 10; i++) {
    console.log(vakjes[i]); 
    let nums = vakjes[i];
    nums.src = "img/box.svg";
}

function startgame(){
    document.getElementById("start-ticTacToe-box").style.display = "none";
    document.getElementById("start-ticTacToe").style.display = "none";
    game = 1;
}

function bordWipe(){
    round = 0;
    turn = 0;
    text.innerHTML = "";
    speler_speler2 = 0;
    speler1Punten = [];
    speler2Punten = [];
    draw = 0;

    for (let i = 1; i < 10; i++) {
        vakjes[i].src = "img/box.svg";
    }
}

next.addEventListener("click", nextround)
function nextround(){
    if(round != 0){return;}
    bordWipe();
    round = 1;
    text.innerHTML = "player 1";
    turn = 1;
    speler_speler2 = 1;
}

een.addEventListener("click", een1)
function een1(){
    if (turn === 0){return;}
    if (!een.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        een.src = "img/" + speler1 + ".svg"
        speler1Punten.push("1")
    } else{
        een.src = "img/" + speler2 + ".svg"
        speler2Punten.push("1")
    }
    een.style.width = "80px";
    een.style.height = "80px";
    turn = 0;
    switchbeurt();
}

twee.addEventListener("click", twee2)
function twee2(){
    if (turn === 0){return;}
    if (!twee.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        twee.src = "img/" + speler1 + ".svg"
        speler1Punten.push("2");
    } else {
        twee.src = "img/" + speler2 + ".svg"
        speler2Punten.push("2");
    }
    twee.style.width = "80px";
    twee.style.height = "80px";
    turn = 0;
    switchbeurt();
}

drie.addEventListener("click", drie3)
function drie3(){
    if (turn === 0){return;}
    if (!drie.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        drie.src = "img/" + speler1 + ".svg"
        speler1Punten.push("3");
    } else {
        drie.src = "img/" + speler2 + ".svg"
        speler2Punten.push("3");
    }
    drie.style.width = "80px";
    drie.style.height = "80px";
    turn = 0;
    switchbeurt();
}

vier.addEventListener("click", vier4)
function vier4(){
    if (turn === 0){return;}
    if (!vier.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        vier.src = "img/" + speler1 + ".svg"
        speler1Punten.push("4");
    } else {
        vier.src = "img/" + speler2 + ".svg"
        speler2Punten.push("4");
    }
    vier.style.width = "80px";
    vier.style.height = "80px";
    turn = 0;
    switchbeurt();
}

vijf.addEventListener("click", vijf5)
function vijf5(){
    if (turn === 0){return;}
    if (!vijf.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        vijf.src = "img/" + speler1 + ".svg"
        speler1Punten.push("5");
    } else {
        vijf.src = "img/" + speler2 + ".svg"
        speler2Punten.push("5");
    }
    vijf.style.width = "80px";
    vijf.style.height = "80px";
    turn = 0;
    switchbeurt();
}

zes.addEventListener("click", zes6)
function zes6(){
    if (turn === 0){return;}
    if (!zes.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        zes.src = "img/" + speler1 + ".svg"
        speler1Punten.push("6");
    } else {
        zes.src = "img/" + speler2 + ".svg"
        speler2Punten.push("6");
    }
    zes.style.width = "80px";
    zes.style.height = "80px";
    turn = 0;
    switchbeurt();
}

zeven.addEventListener("click", zeven7)
function zeven7(){
    if (turn === 0){return;}
    if (!zeven.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        zeven.src = "img/" + speler1 + ".svg"
        speler1Punten.push("7");
    } else {
        zeven.src = "img/" + speler2 + ".svg"
        speler2Punten.push("7");
    }
    zeven.style.width = "80px";
    zeven.style.height = "80px";
    turn = 0;
    switchbeurt();
}

acht.addEventListener("click", acht8)
function acht8(){
    if (turn === 0){return;}
    if (!acht.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        acht.src = "img/" + speler1 + ".svg"
        speler1Punten.push("8");
    } else {
        acht.src = "img/" + speler2 + ".svg"
        speler2Punten.push("8");
    }
    acht.style.width = "80px";
    acht.style.height = "80px";
    turn = 0;
    switchbeurt();
}

negen.addEventListener("click", negen9)
function negen9(){
    if (turn === 0){return;}
    if (!negen.src.endsWith("img/box.svg")){return;}
    if (speler_speler2 === 1){
        negen.src = "img/" + speler1 + ".svg"
        speler1Punten.push("9");
    } else {
        negen.src = "img/" + speler2 + ".svg"
        speler2Punten.push("9");
    }
    turn = 0;
    switchbeurt();   
}
function switchbeurt(){
    console.log(turn);
    if (speler_speler2 === 1){
        text.innerHTML = "player 2";
    } else {
        text.innerHTML = "player 1";
    }
    draw++
    console.log(speler1Punten +","+ speler2Punten)
    setTimeout(spelerSwitch, 1000);
    winCheck();
    
}
function spelerSwitch(){
    if (speler_speler2 === 1){
        speler_speler2 = 2;
    } else {
        speler_speler2 = 1;
    }
    turn = 1;
}

function winCheck(){
    if (speler1Punten.includes("1") && speler1Punten.includes("2") && speler1Punten.includes("3")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("1") && speler1Punten.includes("4") && speler1Punten.includes("7")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("1") && speler1Punten.includes("5") && speler1Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("2") && speler1Punten.includes("5") && speler1Punten.includes("8")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("3") && speler1Punten.includes("5") && speler1Punten.includes("7")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("3") && speler1Punten.includes("6") && speler1Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("4") && speler1Punten.includes("5") && speler1Punten.includes("6")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler1Punten.includes("7") && speler1Punten.includes("8") && speler1Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler1Wint,1000);
    } else if (speler2Punten.includes("1") && speler2Punten.includes("2") && speler2Punten.includes("3")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("1") && speler2Punten.includes("4") && speler2Punten.includes("7")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("1") && speler2Punten.includes("5") && speler2Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("2") && speler2Punten.includes("5") && speler2Punten.includes("8")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("3") && speler2Punten.includes("5") && speler2Punten.includes("7")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("3") && speler2Punten.includes("6") && speler2Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("4") && speler2Punten.includes("5") && speler2Punten.includes("6")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (speler2Punten.includes("7") && speler2Punten.includes("8") && speler2Punten.includes("9")){
        round = 0;
        turn = 0;
        setTimeout(speler2Wint,1000);
    } else if (draw === 9){
        alert("Draw");
    } else {
        return;
    }
}

function speler1Wint(){
    alert("speler 1 wint!");
    setTimeout(bordWipe,1000);
}
function speler2Wint(){
    alert("speler 2 wint!");
    setTimeout(bordWipe,1000);
}