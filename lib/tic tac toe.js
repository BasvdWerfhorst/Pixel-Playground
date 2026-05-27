let game = 0;
let round = 0;
let turn = 0;

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
let text = document.getElementById("ticTacToe-turn");

function startgame(){
    document.getElementById("start-ticTacToe-box").style.display = "none";
    document.getElementById("start-ticTacToe").style.display = "none";
    game = 1;
}
een.addEventListener("click", een())
twee.addEventListener("click", twee())
drie.addEventListener("click", drie())
vier.addEventListener("click", vier())
vijf.addEventListener("click", )
zes.addEventListener("click", )
zeven.addEventListener("click", )
acht.addEventListener("click", )
negen.addEventListener("click", )

next.addEventListener("onclick", nextround())
function nextround(){
    round = 1;
    text.innerHTML = "your turn";
    turn = 1;
}
function turns(){
    

}
function een(){
    if (turn === 0){
        return;
    }
}