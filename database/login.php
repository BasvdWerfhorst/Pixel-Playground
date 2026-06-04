<?php
function login($gebruikersnaam, $wachtwoord){
    require "database/DBC.php";
    try{
        $sql = "SELECT * FROM gebruikers WHERE gebruikersnaam = '$gebruikersnaam' AND wachtwoord = '$wachtwoord'";
        $result = $conn->query($sql);
        if($result->num_rows == 1){
            $result->close();
            $conn->close();
            return true;
        }else{
            $result->close();
            $conn->close();
            return false;
        }
    }catch(Exception $e){
        return false;
    }
}
?>