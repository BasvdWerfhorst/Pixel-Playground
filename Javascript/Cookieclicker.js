cookie = document.querySelector("#cookie");
counter = document.querySelector("#cookie-counter");
count = 0;

// Base cookie clicker

let tapcount = 1;
let intervalId = null;

function addCounter(event) {
    count = count + 1;
    counter.textContent = count;
}


cookie.addEventListener('click', addCounter)

// Base cookie clicker


// Buying process


let cost = 20;
let purchaseNumber = document.getElementById('purchaseNumberLow');
let purchasedOvens = 0;


document.getElementById('cookie-oven-img').addEventListener('click', () => {
    if (count > cost) {
        count -= cost; 
        
        purchasedOvens++; 
        
        purchaseNumber.innerText = purchasedOvens;
        

    } else {
        alert("Not enough cookies!");
    }
});



































































// let tapcount = 1;

// // cookieClick function hier:

// function addCounter(event) {
//     count = count + 1;
//     counter.textContent = count;
// }

// function tap(event) {
//     count = count + tapcount;
//     counter.textContent = count;
// }
// setInterval(tap, 1000);

// function button(event) {
//     if(tapcount == 1) {
//         tapcount = 0;
//     }   else {
//             tapcount = 1;
//         }
//     }



// add event listener op de cookie hier:







































// function onEvent(event) {
//     event: [object MouseEvent]
//     event.target: [object HTMLImageElement]
//     event.target.id: cookie
//     event.clientX (muis X): 216
//     event.clientY (muis Y) 480
// }
