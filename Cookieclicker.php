<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">

    <script src="\Pixel-Playground\Javascript\Cookieclicker.js" defer></script>
</head>
<body>
    <header>
        <?php require 'inc/Header.php' ?>
    </header>
    <main id="cookie-main">
        <header class="title">Cookie Clicker</header>                
        <detail class="cookies">
            <div id="cookie-counter">0</div>
            cookies
        </detail>
        <img id="cookie" src="\Pixel-Playground\img\cookie-removebg-preview.png" alt="cookie">

        <button id="autocounter">Autoclicker</button>
        <style>
            #autocounter {
                margin: 10px;
            }
        </style>
    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>