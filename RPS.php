<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, paper, scissors</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">
    <script src="\Pixel-Playground\Javascript\RPS.js" defer></script>
</head>
<body>
    <header>
        <?php require 'inc/Header.php' ?>
    </header>
    <main>

    <div class="rps-off-screen-menu">
    <ul id="Rps-Ul">
        <li id="rps-cartoon">Cartoon</li>
        <li id="rps-realistic">Realistic</li>
        <li id="rps-weird">Neon</li>
    </ul>
</div>
   
<nav class="rps-nav-button rps-style">
    <span>Card</span>
    <span>Styles</span>
</nav>

<p id="result-display">Click the button to play!</p>




<template>
    <article class="RPS-cards">
        <img src="\Pixel-Playground\img\RPS\Rock-removebg-preview.png" id="rock" class="choice-img" alt="Plaatje steen">
        <img src="\Pixel-Playground\img\RPS\Paper-removebg-preview.png" id="paper" class="choice-img" alt="Plaatje papier">
        <img src="\Pixel-Playground\img\RPS\Scissor-removebg-preview.png" id="scissors" class="choice-img" alt="Plaatje schaar">
    </article>
</template>

<template>
    <article class="RPS-cards">
        <img src="\Pixel-Playground\img\RPS\Rock 2.jpg" class="choice-img" alt="Plaatje steen">
        <img src="\Pixel-Playground\img\RPS\Papier 2.jpg" class="choice-img" alt="Plaatje papier">
        <img src="\Pixel-Playground\img\RPS\Schaar 2.jpg" class="choice-img" alt="Plaatje schaar">
    </article>
</template>

<template>
    <article class="RPS-cards">
        <img src="\Pixel-Playground\img\RPS\Rock 3.png" class="choice-img" alt="Plaatje steen">
        <img src="\Pixel-Playground\img\RPS\Papier 3.png" class="choice-img" alt="Plaatje papier">
        <img src="\Pixel-Playground\img\RPS\Papier 3.png" class="choice-img" alt="Plaatje schaar">
    </article>
</template>




    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>