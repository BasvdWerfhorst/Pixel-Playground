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

    <main id="cookie-grid">
    <left id='cookie-left'>
        <header class="title">Cookie Clicker</header>                
        <detail class="cookies">
            <div id="cookie-counter">0</div>
            cookies
        </detail>
        <img id="cookie" src="\Pixel-Playground\img\cookie-removebg-preview.png" alt="cookie">
    </left>

    <right id="cookie-right">
        
        <h3 class="purchaseNumberTop" style="color: white;">text</h3>
        <img src="\Pixel-Playground\img\oven img.png" alt="cookieclicker_oven_img" class="cookie-buyables" id="cookie-oven-img">
        <h3 class="purchaseNumberLow" style="color: white;"></h3>

        <h3 class="purchaseNumberTop" style="color: white;">text</h3>
        <img src="\Pixel-Playground\img\bakery img.png" alt="cookieclicker_oven_img" class="cookie-buyables">
        <h3 class="purchaseNumberLow" style="color: white;"></h3>

        <h3 class="purchaseNumberTop" style="color: white;">text</h3>
        <img src="\Pixel-Playground\img/Factory img.png" alt="cookieclicker_oven_img" class="cookie-buyables">
        <h3 class="purchaseNumberLow" style="color: white;"></h3>

    </right>

    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>