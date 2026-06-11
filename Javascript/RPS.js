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

function checkStyle() {
    const style1 = document.querySelector('.style1');

    if (style1.textContent !== '') {

        // Cartoon
        cartoonButton.addEventListener('click', () => {
            const templateCartoon = document.getElementById("template-Cartoon");
            const style1 = document.querySelector('.style1');
            const cloneCartoon = templateCartoon.content.cloneNode(true);

            style1.replaceChildren();
            
            // Changed to querySelector so it searches the clone
            cloneCartoon.querySelector('#rock').addEventListener('click', function() {
                playRound('Rock');
            });

            cloneCartoon.querySelector('#paper').addEventListener('click', function() {
                playRound('Paper');
            });

            cloneCartoon.querySelector('#scissors').addEventListener('click', function() {
                playRound('Scissors');
            });

            style1.appendChild(cloneCartoon);
        });

        // Realistic
        realistic.addEventListener('click', () => {
            const templateRealistic = document.getElementById("template-Realistic");
            const style1 = document.querySelector('.style1');
            const cloneRealistic = templateRealistic.content.cloneNode(true);

            style1.replaceChildren();
            
            cloneRealistic.querySelector('#rock').addEventListener('click', function() {
                playRound('Rock');
            });

            cloneRealistic.querySelector('#paper').addEventListener('click', function() {
                playRound('Paper');
            });

            cloneRealistic.querySelector('#scissors').addEventListener('click', function() {
                playRound('Scissors');
            });

            style1.appendChild(cloneRealistic);
        });

        // Neon
        neon.addEventListener('click', () => {
            const templateNeon = document.getElementById("template-Neon");
            const style1 = document.querySelector('.style1');
            const cloneNeon = templateNeon.content.cloneNode(true);

            style1.replaceChildren();
            
            cloneNeon.querySelector('#rock').addEventListener('click', function() {
                playRound('Rock');
            });

            cloneNeon.querySelector('#paper').addEventListener('click', function() {
                playRound('Paper');
            });

            cloneNeon.querySelector('#scissors').addEventListener('click', function() {
                playRound('Scissors');
            });

            style1.appendChild(cloneNeon);
        });

    } else {

        const templateCartoon = document.querySelector("#template-Cartoon");
        const style1 = document.querySelector('.style1');
        const cloneCartoon = templateCartoon.content.cloneNode(true);

        style1.replaceChildren();
        
        cloneCartoon.querySelector('#rock').addEventListener('click', function() {
            playRound('Rock');
        });

        cloneCartoon.querySelector('#paper').addEventListener('click', function() {
            playRound('Paper');
        });

        cloneCartoon.querySelector('#scissors').addEventListener('click', function() {
            playRound('Scissors');
        });

        style1.appendChild(cloneCartoon);

        // SAFE: Re-run once to bind the click events now that style1 has content
        checkStyle(); 
    } 
}

// Kickstart the function on initial page load
checkStyle();












// dat de oude kaarten onzichtbaar worden gemaakt, 
// en de opgeklikte thema kaarten worden Getoont.
// als er geen style is gekozen wil ik dat die automatisch de normale toont.





























