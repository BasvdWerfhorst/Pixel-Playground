<?php
session_start();
if(empty($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true){
    header('Location: index.php');
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
</head>
<body>

<header>
    <?php require 'inc/Header.php' ?>
</header>

<main>
    <p>Ingelogd als <?php echo $_SESSION['gebruikersnaam']; ?></p>
    <a href="database/uitgelogd.php">Uitloggen</a>
</main>

<footer>
    <?php require 'inc/Footer.php' ?>
</footer>

</body>
</html>

