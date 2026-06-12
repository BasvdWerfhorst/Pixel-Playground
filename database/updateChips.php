<?php
session_start();
require "DBC.php";

$data = json_decode(file_get_contents('php://input'), true);
$chips = $data['chips'];
$id = $_SESSION['gebruiker_id'];


if(!empty($chips)){
    if($_SESSION['loggedIn'] == true){
        try{
            $sql = "SELECT * FROM save_gamedata WHERE gebruiker_id = '$id' AND game_id = 4";
            $result = $conn->query($sql);
            if($result->num_rows == 1){
                $row = $result->fetch_object();
                $saveData = $row->save_data;
                $id = $row->save_id;
                $sql2 = "DELETE FROM save_gamedata WHERE save_id = '$id'";                
                $conn->query($sql2);
                echo json_encode(['saveData' => $saveData]);
                $result->close();
                $conn->close();
                return;
            }else {
                try{
                    $sql2 = "INSERT INTO save_gamedata (game_id, gebruiker_id, save_data) VALUES (4, '$id', '$chips')";
                    $conn->query($sql2);
                    $result->close();
                    $conn->close();
                }
                return ;
            }
        }
    } else{
        return;
    }
}