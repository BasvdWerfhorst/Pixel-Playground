<?php
session_start();
require "DBC.php"; 
$melding = '';

if(isset($_POST['submit'])){
    
    $id = $_SESSION['gebruiker_id'];
    $nieuwGebruikersnaam = $_POST['gebruikersnaam'];
    $nieuwWachtwoord = $_POST['wachtwoord'];

    if (empty($_POST["gebruikersnaam"]) || empty($_POST["wachtwoord"])) {
        $melding = "Vul alle velden in!";
    } 
    else {
        if($_SESSION['loggedIn'] == true){
            try {
                $sql = "UPDATE gebruikers SET gebruikersnaam = '$nieuwGebruikersnaam', wachtwoord = '$nieuwWachtwoord' WHERE id = '$id'";
                $conn->query($sql);
                $conn->close();
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
        header('Location: ../profiel.php');
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
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>
<header>
    <?php require '../inc/Header.php'; ?>
</header>
<main>
<p><?php echo $melding; ?></p>
<form action="" method="post"> 
    <h1>updated inloggegevens</h1>
    <input type="text" name="gebruikersnaam" placeholder="gebruikersnaam">
    <input type="wachtwoord" name="wachtwoord" placeholder="wachtwoord">
    <input type="submit" name="submit" value="submit">
</form> 
</main>
<footer>
    <?php require '../inc/Footer.php'; ?>
</footer>
</body>
</html>