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




const realistic = document.getElementById("rps-realistic");
const neon = document.getElementById("rps-neon");
const cartoonButton = document.getElementById('rps-cartoon');
const style1 = document.querySelector('.style1');





if (style1 === 0) {

// Cartoon
cartoonButton.addEventListener('click', () => {
    const templateCartoon = document.getElementById("template-Cartoon");
    const style1 = document.querySelector('.style1');
    const cloneCartoon = templateCartoon.content.cloneNode(true);

    
    cloneCartoon.getElementById('rock').addEventListener('click', function() {
    playRound('Rock');
    });

    cloneCartoon.getElementById('paper').addEventListener('click', function() {
    playRound('Paper');
    });

    cloneCartoon.getElementById('scissors').addEventListener('click', function() {
    playRound('Scissors');
    });


    style1.appendChild(cloneCartoon);

});


// Realistic
realistic.addEventListener('click', () => {
    const templateRealistic = document.getElementById("template-Realistic");
    const style1 = document.querySelector('.style1');
    const cloneRealistic = templateRealistic.content.cloneNode(true);
    
    cloneRealistic.getElementById('rock').addEventListener('click', function() {
    playRound('Rock');
    });

    cloneRealistic.getElementById('paper').addEventListener('click', function() {
    playRound('Paper');
    });

    cloneRealistic.getElementById('scissors').addEventListener('click', function() {
    playRound('Scissors');
    });


    style1.appendChild(cloneRealistic);
});


// Neon
neon.addEventListener('click', () => {
    const templateNeon = document.getElementById("template-Neon");
    const style3 = document.querySelector('.style1');
    const cloneNeon = templateNeon.content.cloneNode(true);
    
    cloneNeon.getElementById('rock').addEventListener('click', function() {
    playRound('Rock');
    });

    cloneNeon.getElementById('paper').addEventListener('click', function() {
    playRound('Paper');
    });

    cloneNeon.getElementById('scissors').addEventListener('click', function() {
    playRound('Scissors');
    });


    style1.appendChild(cloneNeon);
});

} else {


    const templateCartoon = document.querySelector("#template-Cartoon");
    const style1 = document.querySelector('.style1');
    const cloneCartoon = templateCartoon.content.cloneNode(true);

    
    cloneCartoon.getElementById('rock').addEventListener('click', function() {
    playRound('Rock');
    });

    cloneCartoon.getElementById('paper').addEventListener('click', function() {
    playRound('Paper');
    });

    cloneCartoon.getElementById('scissors').addEventListener('click', function() {
    playRound('Scissors');
    });


    style1.appendChild(cloneCartoon);

};













// dat de oude kaarten onzichtbaar worden gemaakt, 
// en de opgeklikte thema kaarten worden Getoont.
// als er geen style is gekozen wil ik dat die automatisch de normale toont.





























