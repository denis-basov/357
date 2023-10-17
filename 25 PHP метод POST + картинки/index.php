<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Регистрация</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Регистрация</h1>

    <form action="form.php" class="reg-form" method="POST" enctype="multipart/form-data">
        <div class="form-input">
            <label>Имя:</label>
            <input type="text" name="firstName" placeholder="Введите имя">
        </div>
        <div class="form-input">
            <label>Дата рождения:</label>
            <input type="date" name="birthDate">
        </div>
        <div class="form-input">
            <label>Логин:</label>
            <input type="text" name="login" placeholder="Введите логин">
        </div>
        <div class="form-input">
            <label>Емейл:</label>
            <input type="text" name="email" placeholder="example@test.com">
        </div>
        <div class="form-input">
            <label>Пароль:</label>
            <input type="password" name="password" placeholder="Не менее 6 символов">
        </div>
        <div class="form-input">
            <label>Выберите фото профиля:</label><br>
            <input type="file" name="avatar">
        </div>
        <div class="form-input">
            <input type="submit" value="Зарегистрироваться">
        </div>
    </form>
</body>
</html>