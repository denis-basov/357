<?php
// модель для работы с таблицей users

require_once 'DBConnect.php';

class Users
{

    /**
     * проверка логина по БД на уникальность
     */
    public static function checkLoginUnique($login){
        $pdo = DBConnect::getConnection();

        $query = "SELECT login
                  FROM users
                  WHERE login = ?;";
        $statement = $pdo->prepare($query);
        $statement->execute([$login]);
        return $statement->rowCount();
    }

    /**
     * проверка емейла на уникальность
     */
    public static function checkEmailUnique($email){
        $pdo = DBConnect::getConnection();

        $query = "SELECT email
                  FROM users
                  WHERE email = ?;";
        $statement = $pdo->prepare($query);
        $statement->execute([$email]);
        return $statement->rowCount();
    }
}