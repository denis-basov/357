<?php
/**
 * для подключения к БД нужно:
 * 1. Название БД - test
 * 2. Адрес сервера БД - localhost
 * 3. Логин пользователя - root
 * 4. Пароль - ''
 */


class DBConnect{
    // статические свойства для подключения к БД
    private static $dbName = 'f0727777_ashion';
    private static $dbHost = 'localhost';
    private static $dbLogin = 'f0727777_admin';
    private static $dbPassword = '123456789';

    // метод для получения объекта соединения с БД
    public static function getConnection(){
        // dsn: mysql:dbname=test;host=localhost
        return new PDO('mysql:dbname='.self::$dbName.';host='.self::$dbHost, self::$dbLogin, self::$dbPassword, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
        ]);
    }

    // метод для просмотра массивов
    public static function debug($value){
        echo '<pre>';
        print_r($value);
        echo '</pre>';
    }

}