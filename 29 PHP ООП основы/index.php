<?php

require 'Cars.php';

// создаем объекты (экземпляры) класса Cars
$car1 = new Cars('VAZ', '2101', 'Blue', 1100);
$car2 = new Cars('VAZ', '2107', 'Silver', 1050);

// задаем значения свойствам объектов
//$car1->maker = 'VAZ';
//$car1->model = '2101';
//$car1->color = 'Blue';
//$car1->weight = 1100;
//
//print_r($car1);
//print_r($car2);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Автомобили</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Автомобили</h1>
    <div class="cars">
        <?php
            $car1->getCarInfo();
            $car2->getCarInfo();
        ?>
    </div>
</body>
</html>

