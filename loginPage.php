<?php

$melding = "";
if(isset($_POST['submit'])){;
    require "database/login.php";
    if(isset($_POST['add'])){
       if (empty($_POST["username"]) || empty($_POST["password"])) {
            $melding = "Vul alle velden in!";
        } else {
            $addUsername = $_POST["addGebruikersnaam"];
            $addPassword = $_POST["addWachtwoord"];
            require "DBC.php";
            try {
                $sql = "INSERT INTO users (username, password) VALUES ('$addUsername', '$addPassword')";
                $conn->query($sql);
                $conn->close();
                $melding = "Data succesvol toegevoegd!";
                header('Location: inloginPage.php');

            } catch (Exception $e) {
                $melding = "Error: " . $e->getMessage();
            }
        }
    } elseif (isset($_POST['submit'])){ 
        if(!empty($_POST['gebruikersnaam']) && !empty($_POST['wachtwoord'])){
            $uname = $_POST['gebruikersnaam'];
            $pass = $_POST['wachtwoord'];
            if(login($uname, $pass)){
                session_start();
                $_SESSION['gebruikersnaam'] = $uname;
                $_SESSION['loggedIn'] = true;
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
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
    <script src="lib/login.js" defer></script>
</head>
<body>
<header>
    <?php require 'inc/Header.php' ?>
</header>
<main>
    <p><?php echo $melding; ?></p>
    <section id="loginRegister"></section>
    <form action="" method="post" id="loginForm">
        <input type="text" name="gebruikersnaam" placeholder="gebruikersnaam">
        <input type="wachtwoord" name="wachtwoord" placeholder="wachtwoord">
        <input type="submit" name="submit" value="submit">
    </form>
    <form action="" method="post" id="registerForm"> 
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
