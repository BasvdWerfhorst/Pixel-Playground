<?php
session_start();
require 'database/DBC.php';
if(empty($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true){
    header('Location: index.php');
    exit;
}else{
$id = $_SESSION['gebruiker_id'];

$sql = "SELECT * FROM gebruiker_badge WHERE gebruiker_id = '$id'";
$result = $conn->query($sql);
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
</head>
<body>

<header>
    <?php require 'inc/Header.php' ?>
</header>

<main id="profiel">
<article id='inlogOpties'>
    <p>Ingelogd als <?php echo $_SESSION['gebruikersnaam']; ?></p>
    <a href="database/uitgelogd.php">Uitloggen</a><br><br>
    <a href="database/inlogChange.php">change info</a> 
</article>
<aside id="badge">
    <?php while($row = $result->fetch_object()){ ?>
        <?php if($row->badge_id == 1){ ?>
            <p>Pro Gambler</p>
            <img src="img/poker-chip-badge.svg" alt="Pro Gambler">
        <?php } ?>
    <?php } ?>
</aside>
    
</main>

<footer>
    <?php require 'inc/Footer.php' ?>
</footer>

</body>
</html>

