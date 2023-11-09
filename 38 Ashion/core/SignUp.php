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
     * метод для проверки фамилии
     */
    private static function validateLastName($lastName){
        $regExp = "/^[а-яё]{2,}$/iu";

        if(strlen($lastName) === 0){// если длина строки равна 0
            return 'Введите фамилию';
        }elseif(!preg_match($regExp, $lastName)){// если фамилия НЕ соответствует рег выражению
            return 'Фамилия должна быть не короче двух символов кириллицы';
        }
    }

    /**
     * метод для проверки логина
     */
    private static function validateLogin($login){
        // минимум 3 символа латиницы или цифр. первый символ - буква
        $regExp = "/^[a-z][a-z0-9]{2,}$/i";

        if(empty($login)){// если в переменной пусто
            return 'Введите логин';
        }elseif(!preg_match($regExp, $login)){
            return 'Минимум 3 символа латиницы или цифр. Первый символ - буква';
        }

        // проверка по БД на уникальность логина
        $rows = Users::checkLoginUnique($login);

        // если есть строки в результате запроса, логин уже занят
        if($rows){
            return 'Такой логин уже занят';
        }
    }

    /**
     * метод для проверки эл почты
     */
    private static function validateEmail($email){
        $regExp = "/^.+@.+\..+$/iu";

        if(empty($email)){
            return 'Введите адрес электронной почты';
        }elseif(!preg_match($regExp, $email)){
            return 'Адрес электронной почты введен в неверном формате';
        }

        // проверка емейла по бд
        $row = Users::checkEmailUnique($email);

        if($row){
            return 'Указанный адрес электронной почты уже зарегистрирован';
        }
    }

    /**
     * метод для проверки пароля
     */
    private static function validatePassword($password){
        $regExp = "/^.{6,}$/iu";

        if(empty($password)){
            return 'Введите пароль';
        }elseif(!preg_match($regExp, $password)){
            return 'Не менее шести произвольных символов';
        }
    }

    /**
     * метод для проверки картинки
     */
    private static function validateAvatar($avatar){
        $allowedSize = 2097152;// ограничение по размеру - 2МБ
        $allowedExtensions = ['image/jpeg', 'image/png', 'image/gif'];// разрешенные форматы файлов

        if($avatar['size'] === 0){// если размер 0, картинку не приложили
            return 'Выберите фото профиля';
        }elseif ($avatar['size'] > $allowedSize){// если картинка более 2МБ
            return 'Размер фото не должен быть более 2МБ';
        }elseif ( !in_array($avatar['type'], $allowedExtensions) ){// если в массиве нет полученного типа файла
            return 'Разрешены картинки только в форматах jpeg, png, gif';
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

        /**
         * проверка фамилии
         */
        $lastNameError = self::validateLastName($input['lastName']);
        if($lastNameError){
            $errors['lastName'] = $lastNameError;
        }

        /**
         * проверка логина
         */
        $loginError = self::validateLogin($input['login']);
        if($loginError){
            $errors['login'] = $loginError;
        }

        /**
         * проверка емейла
         */
        $emailError = self::validateEmail($input['email']);
        if($emailError){
            $errors['email'] = $emailError;
        }

        /**
         * проверка пароля
         */
        $passwordError = self::validatePassword($input['password']);
        if($passwordError){
            $errors['password'] = $passwordError;
        }

        /**
         * проверка аватара
         */
        $avatarError = self::validateAvatar($input['avatar']);
        if($avatarError){
            $errors['avatar'] = $avatarError;
        }

        return [$errors, $input];
    }


    /**
     * метод для сохранения картинки
     */
    private static function saveImage($avatar){
        // создаем путь, куда будем перемещать картинку
        $avatarPath = 'template/images/users/'.time().'_'.$avatar['name'];

        // перемещаем аватар
        move_uploaded_file($avatar['tmp_name'], $avatarPath);

        return $avatarPath;
    }


    /**
     * метод для сохранения данных в БД
     */
    public static function processForm($input){
        // сохранение данных в БД
        

    }

}


