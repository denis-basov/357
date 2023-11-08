<?php
// вспомогательный класс для работы с данными при регистрации

class SignUp
{
    /**
     * метод для проверки имени
     */
    private static function validateFirstName($firstName){
        $regExp = "/^[а-яё]{2,}$/iu";

        if(strlen($firstName) === 0){// если длина строки равна 0
            return 'Введите имя';
        }elseif(!preg_match($regExp, $firstName)){// если имя НЕ соответствует рег выражению
            return 'Имя должно быть не короче двух символов кириллицы';
        }
    }

    /**
     * метод для проверки данных формы
     */
    public static function validateForm(){

        // создаем массивы для данных пользователя и потенциальных ошибок
        $errors = [];
        $input = [];

        // обрабатываем данные из глобальных массивов
        $input['firstName'] = htmlspecialchars(trim($_POST['firstName']));
        $input['lastName'] = htmlspecialchars(trim($_POST['lastName']));
        $input['login'] = htmlspecialchars(trim($_POST['login']));
        $input['email'] = htmlspecialchars(trim($_POST['email']));
        $input['password'] = htmlspecialchars(trim($_POST['password']));
        $input['avatar'] = $_FILES['avatar'];


        /**
         * проверка имени
         */
        // вызываем функцию для проверки имени и сохраняем результат в переменную
        $firstNameError = self::validateFirstName($input['firstName']);
        if($firstNameError){// если в переменной лежит любая строка
            $errors['firstName'] = $firstNameError; // сохраняем ее в массив с ошибками
        }


        DBConnect::debug($input);
        DBConnect::debug($errors);
        return [$errors, $input];
    }
}