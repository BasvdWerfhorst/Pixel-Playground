let cookie = document.querySelector("#cookie");
let counter = document.querySelector("#cookie-counter");
let count = 0;
let autoCount = 0;
let ovenCount = 0;
let bakeryCount = 0;
//De variabelen voor de oven amount teller
let ovenNumberElement = document.getElementById("purchaseNumberLowOven"); 
let ovenNumberCount = 0;
// Variabelen oven prijs
let prijsTotaalOven = document.getElementById("prijsOven");
let prijsOven = 10;
// Variabelen Bakery
let bakery = document.getElementById("BakeryImg");
let amountBakery = document.getElementById("purchaseNumberLowBakery");
let costBakery = document.getElementById("prijsBakery"); 
let prijsBakeryGetal = 50; 
let bakeryAmount = 0;

let bakeryMultiplier = 1;




// Base cookie clicker

function addCounter(event) {
    count = count + 1;
    counter.textContent = count;
}


cookie.addEventListener('click', addCounter)



// als ik op de knop klik,
// element ophalen
// addEventListener toevoegen
// functie maken waar de event listner naar verwijst. 

let oven = document.getElementById("cookie-oven-img")

oven.addEventListener('click', ovenKoop); //De event listner die luistert naar de oven

setInterval(autoCounter, 1000) 

function autoCounter() {
    count = count + autoCount;
    counter.textContent = count;
    // console.log(count);
}




function ovenKoop() { //hier roep ik de oven eventlistner op.

if (count >= prijsOven) { 
    ovenCount += 1;
    count = count - prijsOven;
    prijsOven = Math.floor(prijsOven * (1 + (0.10 * ovenCount))); // math.floor rond het getal af naar beneden.
    prijsTotaalOven.innerText = "Cost: " + prijsOven; 
    counter.textContent = count; 
    autoCount = autoCount + 1;
    ovenNumberCount = ovenNumberCount + 1;
    ovenNumberElement.innerText = ovenNumberCount;

} else {
    alert("Niet genoeg koekjes");
}
 }


function buyBakery() {
    if (count >= prijsBakeryGetal) {
        count = count - prijsBakeryGetal;
        bakeryAmount = bakeryAmount + 1;
        amountBakery.innerText = bakeryAmount;

        prijsBakeryGetal = Math.floor(prijsBakeryGetal * (1 + (0.80 * bakeryAmount)));
        costBakery.innerText = "Cost: " + prijsBakeryGetal;

        bakeryMultiplier += 0.01;
        console.log(bakeryMultiplier)
    } else {
        alert("Niet genoeg koekjes");
    }
}


setInterval(bakeryTime, 1000);



function bakeryTime() {
    if (bakeryAmount > 0) {
        count = (count * bakeryMultiplier);
        counter.textContent = Math.floor(count);
    }
}


bakery.addEventListener('click', buyBakery);





















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
