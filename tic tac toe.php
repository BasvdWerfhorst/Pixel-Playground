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
    <h1 id="title-ticTacToe">tic tac toe</h1>
    <section id="ticTacMain">
        <section id="tic-tac-toe">
            <img id="1-1" class="ticTacToe-x-o" alt="">
            <img id="1-2" class="ticTacToe-x-o" alt="">
            <img id="1-3" class="ticTacToe-x-o" alt="">
            
            <img id="2-1" class="ticTacToe-x-o" alt="">
            <img id="2-2" class="ticTacToe-x-o" alt="">
            <img id="2-3" class="ticTacToe-x-o" alt="">
            
            <img id="3-1" class="ticTacToe-x-o" alt="">
            <img id="3-2" class="ticTacToe-x-o" alt="">
            <img id="3-3" class="ticTacToe-x-o" alt="">
        </section>

        <section id="aside">
            <section>
                <h3 id="ticTacToe-turn"></h3>
            </section>
            <section id="ticTacToe-actions">
                <button id="nextround-ticTacToe">next/start round</button>
            </section>
        </section>
    </section>
    
    <section id="start-ticTacToe-box">
        <button id="start-ticTacToe" onclick="startgame()">start</button>
    </section>
    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>