<?php

session_start();
include 'db.php';

$id = $_SESSION['gebruiker_id'];

$check = $conn->query("
    SELECT * FROM gebruiker_badges 
    WHERE gebruiker_id = '$id' AND badge_id = 1
");

if($check->num_rows == 0){
    $conn->query("
        INSERT INTO gebruiker_badges (gebruiker_id, badge_id)
        VALUES ('$id', 1)
    ");
}


?>