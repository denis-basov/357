<?php
    $menu = require 'components/menu-arr.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $title ?? 'ООО Рога и Копыта' ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<!-- шапка сайта -->
<header>
    <div class="logo">LOGO</div>
    <h1><?= $headerTitle ?? 'Шапка сайта' ?></h1>
    <nav>
        <ul>
            <?php
                foreach ($menu as $link => $desc){
                    echo "<li><a href='$link'>$desc</a></li>";
                }
            ?>
        </ul>
    </nav>
</header>