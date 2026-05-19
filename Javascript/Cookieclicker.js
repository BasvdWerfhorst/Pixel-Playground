cookie = document.querySelector("#cookie");
counter = document.querySelector("#cookie-counter");
count = 0;
autoClicker = document.querySelector("#autocounter");

let tapcount = 1;

// cookieClick function hier:

function addCounter(event) {
    count = count + 1;

    counter.textContent = count;
}

function tap(event) {
    count = count + tapcount;
    counter.textContent = count;
}
setInterval(tap, 1000);

function button(event) {
    if(tapcount == 1) {
        tapcount = 0;
    }   else {
            tapcount = 1;
        }
    }



// add event listener op de cookie hier:

cookie.addEventListener('click', addCounter)

autoClicker.addEventListener('click', button)





































// function onEvent(event) {
//     event: [object MouseEvent]
//     event.target: [object HTMLImageElement]
//     event.target.id: cookie
//     event.clientX (muis X): 216
//     event.clientY (muis Y) 480
// }
