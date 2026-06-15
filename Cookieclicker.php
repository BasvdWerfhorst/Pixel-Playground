<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookieclicker</title>
    <link rel="stylesheet" href="\Pixel-Playground\style\style.css">

    <script src="\Pixel-Playground\Javascript\Cookieclicker.js" defer></script>
</head>
<body>
    <header>
        <?php require 'inc/Header.php' ?>
    </header>

        <button id="freeCookies"></button>

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
        
        <h3 id="prijsOven" class="purchaseNumberTop" style="color: white;">Cost: 10 (+1p/s)</h3>
        <img src="\Pixel-Playground\img\oven img.png" alt="cookieclicker_oven_img" class="cookie-buyables" id="cookie-oven-img">
        <h3 id="purchaseNumberLowOven" class="purchaseNumberLow" style="color: white;">0</h3>

        <h3 id="prijsBakery" class="purchaseNumberTop" style="color: white;">Cost: 50 (+1% p/10s)</h3>
        <img src="\Pixel-Playground\img\bakery img.png" alt="cookieclicker_bakery_img" class="cookie-buyables" id="BakeryImg">
        <h3 id="purchaseNumberLowBakery" class="purchaseNumberLow" style="color: white;">0</h3>

        <h3 id="prijsFactory" class="purchaseNumberTop" style="color: white;">Cost: 800 (+100 p/10s)</h3>
        <img src="\Pixel-Playground\img/Factory img.png" alt="cookieclicker_factory_img" class="cookie-buyables" id="FactoryImg">
        <h3 id="purchaseNumberLowFactory" class="purchaseNumberLow" style="color: white;">0</h3>

    </right>

    </main>
    <footer>
        <?php require 'inc/Footer.php' ?>
    </footer>
</body>
</html>