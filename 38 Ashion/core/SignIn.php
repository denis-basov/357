<?php
// вспомогательный класс для работы с данными при входе на сайт

class SignIn
{
    /**
     * метод для проверки логина
     */
    private static  function validateLogin($login){
        if(empty($login)){
            return 'Введите логин';
        }

        // проверка на наличие логина в БД
        $row = Users::checkLoginUnique($login);
        // если логин в БД не найден
        if($row === 0){
            return 'Указанный логин не найден';
        }
    }

    /**
     * метод для проверки пароля
     */
    private static function validatePassword($password, $login){
        if(empty($password)){
            return 'Введите пароль';
        }

        // получаем пароль текущего пользователя
        $passwordDB = Users::getPasswordByLogin($login);

        // сравниваем пароль из бд и введенный клиентом при входе
        if(!password_verify($password, $passwordDB)){// если пароли НЕ совпадают
            return 'Пароль неверен';
        }
    }

    /**
     * метод для проверки данных формы входа
     */
    public static function validateForm(){
        $errors = [];
        $input = [];

        $input['login'] = htmlspecialchars(trim($_POST['login']));
        $input['password'] = htmlspecialchars(trim($_POST['password']));

        /**
         * проверка логина и пароля
         */
        $loginError = self::validateLogin($input['login']);
        if($loginError){// если логин введен неверно
            $errors['login'] = $loginError;
        }else{// если логин введен верно, проверяем пароль
            $passwordError = self::validatePassword($input['password'], $input['login']);
            if($passwordError){// если пароль введен неверно
                $errors['password'] = $passwordError;
            }
        }

        return [$errors, $input];
    }

    public static function processForm($input){
        // получаем необходимые для сессии данные о пользователе
        $userInfo = Users::getUserInfoSession($input['login']);

        // начинаем сесию и записываем в нее данные
        session_start();
        $_SESSION['userId'] = $userInfo['id'];
        $_SESSION['login'] = $input['login'];
        $_SESSION['firstName'] = $userInfo['first_name'];
        $_SESSION['avatar'] = $userInfo['image'];

        // переносим на главную
        header('Location: /');
    }



}