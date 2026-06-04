<?php

require "database/DBC.php";
    $addUsername = $_POST["addGebruikersnaam"];
    $addPassword = $_POST["addWachtwoord"];
    try {
        $sql = "INSERT INTO gebruikers (gebruikersnaam, wachtwoord) VALUES ('$addUsername', '$addPassword')";
        $conn->query($sql);
        $conn->close();
        $melding = "Data succesvol toegevoegd!";
        header('Location: loginPage.php');

    } catch (Exception $e) {
        $melding = "Error: " . $e->getMessage();
    }
    
?>