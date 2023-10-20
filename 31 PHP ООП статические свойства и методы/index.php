<?php
// статические свойства и методы

require 'Math.php';

class Greet{

    public static $message = 'Привет';

    public static function sayHello($userName){
        echo "<h2>". self::$message . ", $userName</h2>";
    }
}
Greet::sayHello('Иван');

$res1 = Math::getSum(5,9);
$res2 = Math::getMult(5,8);
echo $res1, ' ', $res2;