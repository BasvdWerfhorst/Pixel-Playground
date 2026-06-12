<?php
session_start();
require "DBC.php";

$data = json_decode(file_get_contents('php://input'), true);
$chips = $data['chips'];
$cashout = $data['cashout'];
$id = $_SESSION['gebruiker_id'];



if($_SESSION['loggedIn'] == true){
    try{
        $sql = "SELECT * FROM save_gamedata WHERE gebruiker_id = '$id' AND game_id = 4";
        $result = $conn->query($sql);
        if($result->num_rows == 1){
            $row = $result->fetch_object();
            $saveData = $row->save_data;
            $saveId = $row->save_id;
            $conn->query("DELETE FROM save_gamedata WHERE save_id = '$saveId'");
            echo json_encode(['saveData' => $saveData]);
            $result->close();
            $conn->close();
        }else{
            if($cashout > 1000){
                $conn->query("INSERT INTO save_gamedata (game_id, gebruiker_id, save_data) VALUES (4, '$id', '$cashout')");
            }
            echo json_encode(['saveData' => null]);
            $result->close();
            $conn->close();
        }
    } catch(Exception $e){
        echo $e->getMessage();
    }
}
