let cookie = document.querySelector("#cookie");
let counter = document.querySelector("#cookie-counter");
let count = 0;

let autoCount = 0;

let prijsOven = 10;
let ovenCount = 0;
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
oven.addEventListener('click', ovenKoop);

setInterval(autoCounter, 1000) 

function autoCounter() {
    count = count + autoCount;
    counter.textContent = count;
    console.log(count);
}




function ovenKoop() {
// dan koop ik èèn oven


if (count >= prijsOven) { 
    ovenCount += 1;
    count = count - prijsOven;
    prijsOven = prijsOven * Math.floor(1+ (0.10*ovenCount)); // math.floor rond het getal af naar beneden.
    counter.textContent = count; 
    autoCount = autoCount + 1;
} else {
    alert("Niet genoeg koekjes");
}





// //   En er word bijgehouden hoeveel ovens ik heb gekocht.
// ovens moet + 1
 }































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
