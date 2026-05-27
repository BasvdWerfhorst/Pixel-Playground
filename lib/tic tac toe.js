let game = 0;
let round = 0;

let een = document.getElementById("1-1");
let twee = document.getElementById("1-2");
let drie = document.getElementById("1-3");

let vier = document.getElementById("2-1");
let vijf = document.getElementById("2-2");
let zes = document.getElementById("2-3");

let zeven = document.getElementById("3-1");
let acht = document.getElementById("3-2");
let negen = document.getElementById("3-3");

let next = document.getElementById("nextround-ticTacToe");


function startgame(){
    document.getElementById("start-ticTacToe-box").style.display = "none";
    document.getElementById("start-ticTacToe").style.display = "none";
    game = 1;
}
een.addEventListener("click", )
twee.addEventListener("click", )
drie.addEventListener("click", )
vier.addEventListener("click", )
vijf.addEventListener("click", )
zes.addEventListener("click", )
zeven.addEventListener("click", )
acht.addEventListener("click", )
negen.addEventListener("click", )

next.addEventListener("onclick", nextround())
function nextround(){
    round = 1
}