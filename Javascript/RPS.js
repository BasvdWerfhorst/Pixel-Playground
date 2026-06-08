const resultDisplay = document.getElementById('result-display');
const hamMenu = document.querySelector('.rps-nav-button');
const offscrMenu = document.querySelector('.rps-off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscrMenu.classList.toggle('active');
});




function playRound(playerMove) {
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    let computerMove = "";

    if (randomNumber === 1) {
        computerMove = "Rock";
    } else if (randomNumber === 2) {
        computerMove = "Paper";
    } else if (randomNumber === 3) {
        computerMove = "Scissors";
    }

    let result = "";

    if (playerMove === computerMove) {
        result = "It's a tie!";
    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
    ) {
        result = " You win! 🎉";
    } else {
        result = " You lose! 😢";
    }

    resultDisplay.innerHTML = `You chose: ${playerMove}. Computer chose: ${computerMove}. <br> <b>${result}</b>`;
}

document.getElementById('rock').addEventListener('click', function() {
    playRound('Rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('Paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound('Scissors');
});


const cartoon = document.getElementById("rps-cartoon");
const realistic = document.getElementById("rps-realistic");
const neon = document.getElementById("rps-neon");

cartoon.addEventListener('click', () => {
    const templateCartoon = document.getElementById("template-Cartoon");
    const RPScards = document.querySelector('.RPS-cards');
    const clone = templateCartoon.content.cloneNode(true);

    RPScards.appendChild(clone);
    
});

realistic.addEventListener('click', () => {
    
});

neon.addEventListener('click', () => {
    
});



// dat de oude kaarten onzichtbaar worden gemaakt, 
// en de opgeklikte thema kaarten worden Getoont .





























