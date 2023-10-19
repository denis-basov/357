<?php

// ООП - Объектно-ориентированное Программирование
// Класс - шаблон, который содержит свойства и методы.
// На основе (по шаблону) класса создаются объекты
// Объект - экземпляр класса
// Свойства - переменные, описанные в классе
// Методы - функции, описанные в классе

// Модификаторы доступа: public, protected, private

// класс автомобилей
class Cars{
    // свойства
    public $maker;
    public $model;
    public $color;
    public $weight;

    // методы
    // конструктор - магический метод, автоматически срабатывает при создании объекта
    public function __construct($makerPar, $modelPar, $colorPar, $weightPar){
        $this->maker = $makerPar;
        $this->model = $modelPar;
        $this->color = $colorPar;
        $this->weight = $weightPar;
    }

    // вывод информации об авто
    public function getCarInfo(){
        echo "  <div class='car'>
                    <p>Производитель: $this->maker</p>
                    <p>Модель: $this->model</p>
                    <p>Цвет кузова: $this->color</p>
                    <p>Масса: $this->weight</p>
                </div>";
    }

    public function sayHello(){
        echo "<h2>Hello</h2>";
    }
}