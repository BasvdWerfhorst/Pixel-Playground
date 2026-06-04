<?php 
try {
    $conn = new mysqli("localhost", "root", "", "pixel_playground");
} catch (Exception $e){
    die("fout bij verbinden met database: ". $e->getMessage());
}
?>