<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
    <script src="lib/tic tac toe.js" defer></script>
</head>
<body>
    <header>
        <?php require 'inc/Header.php' ?>
    </header>
    <main id="ticTacToe-background">
    <section id="tic-tac-toe">
        <p id="1-1"></p>
        <p id="1-2"></p>
        <p id="1-3"></p>
        
        <p id="2-1"></p>
        <p id="2-2"></p>
        <P id="2-3"></P>
        
        <p id="3-1"></p>
        <p id="3-2"></p>
        <P id="3-3"></P>
    </section>

        <section>

        </section>
        <section>
            <button id="nextround-ticTacToe">next/start round</button>
        </section>
        <!-- <section id="start-ticTacToe-box">
            <button id="start-ticTacToe" onclick="startgame()">start</button>
        </section> -->
    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>