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

    /**
     * добавление нового пользователя в БД
     */
    public static function addNewUser($user){
        $pdo = DBConnect::getConnection();

        // добавляем данные о новом пользователе в БД
        $query = "INSERT INTO users(login, first_name, last_name, email, password, image)
                    VALUES(?,?,?,?,?,?);";
        $statement = $pdo->prepare($query);
        $statement->execute([$user['login'], $user['firstName'], $user['lastName'],
            $user['email'], $user['password'], $user['avatar']]);

        // возвращаем ID добавленного в БД пользователя
        return $pdo->lastInsertId();
    }

    /**
     * получение пароля по логину
     */
    public static function getPasswordByLogin($login){
        $pdo = DBConnect::getConnection();

        $query = "SELECT password
                  FROM users
                  WHERE login = ?;";
        $statement = $pdo->prepare($query);
        $statement->execute([$login]);
        return $statement->fetch()['password'];
    }

    /**
     * метод для получения данных о пользователе для сессии
     */
    public static function getUserInfoSession($login){
        $pdo = DBConnect::getConnection();

        $query = "SELECT id, first_name, image
                  FROM users
                  WHERE login = ?;";
        $statement = $pdo->prepare($query);
        $statement->execute([$login]);
        return $statement->fetch();
    }



}