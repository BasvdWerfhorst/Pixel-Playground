<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main-page</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
</head>
<body>
    <header>
        <?php require 'inc/Header.php' ?>
    </header>
    <main>

    
    <section id="indexSection">
        <article>
            <h1 class="homePageGames">Top Games</h1>
                <img src="\Pixel-Playground\images\Cookieclicker Img.jpg" class="indexImages">
                <img src="\Pixel-Playground\images\Luigi poker.png" class="indexImages">
                <img src="\Pixel-Playground\images\RPS img.jpg" class="indexImages">
        </article>


    <!-- Deze hieronder werkt niet goed, maak hiervan ordered list, maar nog wel een gridpatroon.-->

<article>
    <h1 class="homePageScores">Highscores</h1>
        <ul class="highscore-grid">
            <ul class="highscoreFrames">Overall Highscores
                <ol>Hello</ol>
            </ul>
            <ul class="highscoreFrames">Cookie Clicker Highscores
                <ol></ol>
            </ul>
            <ul class="highscoreFrames">Luigi Poker Highscores
                <ol></ol>
            </ul>
            <ul class="highscoreFrames">RPS Highscores
                <ol></ol>
            </ul>
        </ul>
</article>
    </section>


    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>