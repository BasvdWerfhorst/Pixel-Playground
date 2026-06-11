<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
    <script src="javascript/poker.js" defer></script>
</head>
<body id="poker">
    <header>
        <?php require 'inc/Header.php' ?>
    </header>
<main>
    <section id="pokerTitle">
        <h1>Poker</h1>
    </section>
    <section id="startBox">
        <button id="startGame">start game</button>
    </section>
    <section id="handAi">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </section>
    <section id="pokerTafel">
        <section id="pot">
            <h1></h1>
        </section>
        <section id="tafelKaarten">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </section>
        <section id="chips">
            <h2>chips: </h2>
            <h2></h2>
        </section>
        
    </section>
    <section id="handSpeler">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </section>
    <section id="chipCheck">
        <h1></h1>
    </section>
    <section id="actionButtons">
        <button id="fold">Fold</button>
        <button id="check">check</button>
        <button id="raise">Raise/bet</button>
    </section>
    <section id="gameOptions">
        <button id="startRound">Start round/Next round</button>
        <button id="endGame">cash out</button>
    </section>
    
</main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>