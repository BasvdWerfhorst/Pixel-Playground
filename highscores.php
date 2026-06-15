<?php
session_start();
require 'database/DBC.php';

$id = $_SESSION['gebruiker_id'];

$sql = "SELECT highscores.highscore, games.game_name
        FROM highscores
        INNER JOIN games
        ON highscores.game_id = games.id
        WHERE highscores.gebruiker_id = $id
        ORDER BY highscores.highscore DESC
        LIMIT 10";

$result = mysqli_query($conn, $sql);

$sql2 = "SELECT gebruikers.gebruikersnaam, highscores.highscore, games.game_name
         FROM highscores
         INNER JOIN gebruikers
         ON highscores.gebruiker_id = gebruikers.id
         INNER JOIN games
         ON highscores.game_id = games.id
         ORDER BY highscores.highscore DESC
         LIMIT 10";

$topResult = mysqli_query($conn, $sql2);
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Highscores</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>

<header>
    <?php require 'inc/Header.php'; ?>
</header>

<main>

<article id="HSP-grid">

    <article>
        <h3>Jouw Highscores</h3>

        <?php
        while($row = mysqli_fetch_assoc($result))
        {
            echo "<p>" . $row['game_name'] . " - " . $row['highscore'] . "</p>";
        }
        ?>
    </article>

    <article>
        <h3>Top 10</h3>

        <?php
        while($row = mysqli_fetch_assoc($topResult))
        {
            echo "<p>" . $row['gebruikersnaam'] . " - " . $row['game_name'] . " - " . $row['highscore'] . "</p>";
        }
        ?>
    </article>

</article>

</main>

<footer>
    <?php require 'inc/Footer.php'; ?>
</footer>

</body>
</html>