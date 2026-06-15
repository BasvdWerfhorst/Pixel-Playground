<?php session_start(); ?>
<section id="logo">
        <a href="index.php"><img src="\Pixel-Playground\img\NodeHub-homelogo-transparant.png" alt="Nodehub Banner" title="Nodehub Banner"></a>
        <a id="logoText" href="index.php"><h1>Node<span>Hub</span></h1></a> 
</section>
<nav class="homeNav">
    <a href="\Pixel-Playground\index.php" class="headerNav">Home</a>
    <a href="\Pixel-Playground\games.php" class="headerNav">Games</a>
    <?php
    if (isset($_SESSION['loggedIn'])){
        ?>
        <a href="friend.php" class="headerNav">Friends</a>
        <a href="highscores.php" class="headerNav">Highscores</a>
        <a href="profiel.php" class="headerNav">Profile</a>

        <a href="database/uitgelogd.php" class="logButton">Log out</a>
        <?php
    } else {
        ?>
        <a class="logButton" href="/Pixel-Playground/loginPage.php">Login</a>

        <?php
    }
    ?>
</nav>
<nav id="hamburgerMenu">

</nav>
<?php session_abort() ?>