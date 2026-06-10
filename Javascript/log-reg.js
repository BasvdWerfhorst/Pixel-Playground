let logF = document.getElementById("loginForm");
let regF = document.getElementById("registerForm");
let login = document.getElementById("login");
let register = document.getElementById("register");

regF.style.display = "none";
login.style.display = "none"


login.addEventListener("click", () =>{
    regF.style.display = "none";
    login.style.display = "none";
    logF.style.display = "block";
    register.style.display = "block";
});

register.addEventListener("click", () =>{
    regF.style.display = "block";
    login.style.display = "block";
    logF.style.display = "none";
    register.style.display = "none";
});