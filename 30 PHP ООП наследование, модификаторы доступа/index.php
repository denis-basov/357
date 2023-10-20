<?php
// Наследование
// Модификаторы доступа: public, protected, private

/**
 * Класс Dogs - родительский класс
 */
class Dogs{
    // свойства
    protected $name;
    protected $age;
    protected $weight;
    protected $color;

    // конструктор
    public function __construct($name, $age, $weight, $color){
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
        $this->color = $color;
    }

    public function getSummary(){
        echo "
            <div class='dog'>
               <p>Кличка: $this->name</p> 
               <p>Возраст: $this->age</p> 
               <p>Масса: $this->weight</p> 
               <p>Цвет шерсти: $this->color</p> 
            </div>
        ";
    }
}
$bobik = new Dogs('Бобик', 3, 8, 'Черный');


/**
 * Класс RaceDogs - дочерний класс гончих собак
 */
class RaceDogs extends Dogs{
    private $speed;// уникальное свойство, характерное только для гончих собак

    public function __construct($name, $age, $weight, $color, $speed){
        parent::__construct($name, $age, $weight, $color);
        $this->speed = $speed;
    }

    public function getSummary(){
        echo "
            <div class='dog race-dog'>
               <p>Кличка: $this->name</p> 
               <p>Возраст: $this->age</p> 
               <p>Масса: $this->weight</p> 
               <p>Цвет шерсти: $this->color</p> 
               <p>Скорость погони за целью: $this->speed</p> 
            </div>
        ";
    }
}
$belka = new RaceDogs('Белка', 6, 2, 'Серый', 100);


/**
 * Класс ExDogs - дочерний класс выставочных собак
 */
class ExDogs extends Dogs{
    private $breed; // уникальное свойство, характерное только для выставочных собак

    public function __construct($name, $age, $weight, $color, $breed){
        parent::__construct($name, $age, $weight, $color);
        $this->breed = $breed;
    }

    public function getSummary(){
        echo "
            <div class='dog ex-dog'>
               <p>Кличка: $this->name</p> 
               <p>Возраст: $this->age</p> 
               <p>Масса: $this->weight</p> 
               <p>Цвет шерсти: $this->color</p> 
               <p>Порода: $this->breed</p> 
            </div>
        ";
    }
}
$strelka = new ExDogs('Стрелка', 3, 8, 'Рыжий', 'Пудель');

$dogsArr = [$bobik, $belka, $strelka];

//echo "<pre>";
//print_r($dogsArr);
//echo "</pre>";

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Наследование</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="dogs">
        <?php
            foreach ($dogsArr as $dog){
                $dog->getSummary();
            }
        ?>
    </div>
</body>
</html>
