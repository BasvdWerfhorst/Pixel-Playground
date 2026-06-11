<?php
session_start();
require "DBC.php";

$data = json_decode(file_get_contents('php://input'), true);
$highscore = $data['highscore'];
$timestamp = date('Y-m-d H:i:s');
$id = $_SESSION['gebruiker_id'];


if(!empty($highscore)){
    if($_SESSION['loggedIn'] == true){
        try {
            $sql = "INSERT INTO highscores (game_id, gebruiker_id, highscore, timestamp) VALUES (4, '$id', '$highscore', '$timestamp')";
            $conn->query($sql);
            $conn->close();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}