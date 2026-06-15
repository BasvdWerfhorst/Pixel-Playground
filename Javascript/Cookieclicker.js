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

// Factory varialblen
let factoryImg = document.getElementById("FactoryImg");
let factoryPrijs = 800;
let factoryCount = 0;
const factoryCookies = 100;
let facTop = document.getElementById("prijsFactory");
let facLow = document.getElementById("purchaseNumberLowFactory");
let facAdd = 100;


// localstorage:
let counter = document.getElementById('cookie-counter');

let savedValue = localStorage.getItem('myCount');
let count = savedValue ? Number(savedValue) : 100;

counter.textContent = Math.floor(count);






// Base cookie clicker

function addCounter(event) {
    count = count + 1;
    counter.textContent = Math.floor(count);
    localStorage.setItem('myCount', count);
}



cookie.addEventListener('click', addCounter)

let oven = document.getElementById("cookie-oven-img")

oven.addEventListener('click', ovenKoop); //De event listner die luistert naar de oven

setInterval(autoCounter, 1000) 

function autoCounter() {
    count = count + autoCount;
    counter.textContent = count;
    // console.log(count);
}

// OVEN!

function ovenKoop() { //hier roep ik de oven eventlistner op.

if (count >= prijsOven) { 
    ovenCount += 1;
    count = count - prijsOven;
    prijsOven = Math.floor(prijsOven * (1 + (0.10 * ovenCount))); // math.floor rond het getal af naar beneden.
    if (prijsOven >= 100) {
        prijsOven = Math.floor(prijsOven * 0.8)
    } 
    prijsTotaalOven.innerText = "Cost: " + prijsOven + "(+1p/s)"; 
    counter.textContent = count; 
    autoCount = autoCount + 1;
    ovenNumberCount = ovenNumberCount + 1;
    ovenNumberElement.innerText = ovenNumberCount;

} else {
    alert("Niet genoeg koekjes");
}
 }

 // Bakery

function buyBakery() {
    if (count >= prijsBakeryGetal) {
        count = count - prijsBakeryGetal;
        bakeryAmount = bakeryAmount + 1;
        amountBakery.innerText = bakeryAmount;

        prijsBakeryGetal = Math.floor(prijsBakeryGetal * (1 + (0.80 * bakeryAmount)));
        costBakery.innerText = "Cost: " + prijsBakeryGetal + " (+1% p/10s)";

        bakeryMultiplier += 0.01;
        // console.log(bakeryMultiplier)
    } else {
        alert("Niet genoeg koekjes");
    }
}

setInterval(bakeryTime, 10000);

function bakeryTime() {
    if (bakeryAmount > 0) {
        count = Math.floor(count * bakeryMultiplier);
        counter.textContent = Math.floor(count);
    }
}

bakery.addEventListener('click', buyBakery);

// Factory Logic

let timerSpeed = 10100; 
let timer;

function startTimer() {
    clearInterval(timer); 
    timer = setInterval(facCounter, timerSpeed); 
}

function facCounter() {
    if (factoryCount > 0) {
        count = Math.floor(count + facAdd);
        counter.textContent = count;
    }
}

function factoryClick() {
    if (count >= factoryPrijs) {
        factoryCount = factoryCount + 1;
        console.log(factoryCount);
        
        count = count - factoryPrijs;
        counter.textContent = count;
        factoryPrijs = Math.floor(factoryPrijs * 1.5);

        
        timerSpeed = Math.max(500, Math.floor(timerSpeed * 0.99));

        facTop.innerText = "Cost: | " + factoryPrijs + "+100 p/" + Math.max(timerSpeed / 1000) + 's';
        facLow.innerText = factoryCount;

        startTimer(); 

    } else {
        alert("Niet genoeg koekjes");
    }
}

localStorage.setItem.count = count;

startTimer();

factoryImg.addEventListener('click', factoryClick);




































// function onEvent(event) {
//     event: [object MouseEvent]
//     event.target: [object HTMLImageElement]
//     event.target.id: cookie
//     event.clientX (muis X): 216
//     event.clientY (muis Y) 480
// }
