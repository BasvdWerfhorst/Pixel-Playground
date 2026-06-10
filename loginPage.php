<?php
session_start();
$melding = "";
if(isset($_POST['submit']) || isset($_POST['add'])){
    if(isset($_POST['add'])){
       if (empty($_POST["addGebruikersnaam"]) || empty($_POST["addWachtwoord"])) {
            $melding = "Vul alle velden in!";
        } 
        else {
           require "database/register.php";
        }
    } elseif (isset($_POST['submit'])){ 
        if(!empty($_POST['gebruikersnaam']) && !empty($_POST['wachtwoord'])){
            $uname = $_POST['gebruikersnaam'];
            $pass = $_POST['wachtwoord'];
            require "database/login.php";
            if(login($uname, $pass)){
                $_SESSION['gebruikersnaam'] = $uname;
                $_SESSION['loggedIn'] = true;
                setcookie("gebruikersnaam", $uname, time() + (30 * 24 * 60 * 60), "/");
                setcookie("wachtwoord", true, time() + (30 * 24 * 60 * 60), "/");
                setcookie("id", $id, time() + (30 * 24 * 60 * 60), "/");
                header("Location: profiel.php");
                exit();
            }else{
                $melding = "Login gegevens niet juist";
            }
        }else{
            $melding = "Vul alle velden in";
        }
    }
}
session_abort();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
    <script src="Javascript/log-reg.js" defer></script>
</head>
<body>
<header>
    <?php require 'inc/Header.php' ?>
</header>
<main>
    <p><?php echo $melding; ?></p>
    <section id="loginRegister"></section>
    <form action="" method="post" id="loginForm">
        <h1>Login</h1>
        <input type="text" name="gebruikersnaam" placeholder="gebruikersnaam">
        <input type="wachtwoord" name="wachtwoord" placeholder="wachtwoord">
        <input type="submit" name="submit" value="submit">
    </form>
    <form action="" method="post" id="registerForm"> 
        <h1>Register</h1>
        <input type="text" name="addGebruikersnaam" placeholder="gebruikersnaam">
        <input type="wachtwoord" name="addWachtwoord" placeholder="wachtwoord">
        <input type="submit" name="add" value="submit">
    </form>
    <button id="login">login</button>
    <button id="register">register</button>
</main>
<footer>
    <?php require 'inc/Footer.php' ?>
</footer>
</body>
</html>
