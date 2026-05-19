
Math.floor(Math.random() * 53);

let handAi = document.getElementById("handAi");
let handSpeler = document.getElementById("handSpeler")
let tafel = document.getElementById("pokerTafel")
let start = document.getElementById("startGame");
let endG = document.getElementById('endGame');
let chips = 0;
let cashout = 0;
const startChips = 50000; 

start.addEventListener("click", startAmount);
endG.addEventListener("click", cashOut);

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
function startGame(){

}