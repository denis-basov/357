<?php
require 'components/header.php';
?>
<!-- Header Section End -->


<!-- Contact Section Begin -->
<section class="contact spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <div class="contact__content">
                    <div class="contact__form">
                        <h5>Регистрация</h5>

                        <form method="POST" enctype="multipart/form-data">

                            <span class="input-error"><?=$errors['firstName'] ?? ''?></span>
                            <input type="text"
                                   <?php echo isset($errors['firstName']) ? 'class="border-error"' : '' ?>
                                   name="firstName"
                                   placeholder="Имя"
                                   value="<?=$input['firstName'] ?? ''?>">

                            <span class="input-error"><?=$errors['lastName'] ?? ''?></span>
                            <input type="text"
                                   <?php echo isset($errors['lastName']) ? 'class="border-error"' : '' ?>
                                   name="lastName" placeholder="Фамилия"
                                   value="<?=$input['lastName'] ?? ''?>">

                            <span class="input-error"><?=$errors['login'] ?? ''?></span>
                            <input type="text"
                                   <?php echo isset($errors['login']) ? 'class="border-error"' : '' ?>
                                   name="login" placeholder="Логин"
                                   value="<?=$input['login'] ?? ''?>">

                            <span class="input-error"><?=$errors['email'] ?? ''?></span>
                            <input type="text"
                                   <?php echo isset($errors['email']) ? 'class="border-error"' : '' ?>
                                   name="email" placeholder="Электронный адрес"
                                   value="<?=$input['email'] ?? ''?>">

                            <div>
                                <span class="input-error"><?=$errors['password'] ?? ''?></span>
                                <input type="password"
                                    <?php echo isset($errors['password']) ? 'class="border-error"' : '' ?>
                                       name="password" placeholder="Пароль"
                                       value="<?=$input['password'] ?? ''?>">
                                <button class="mb-3" id="show-password">Показать пароль</button>
                            </div>

                            <label>Аватар:</label>
                            <span class="input-error"><?=$errors['avatar'] ?? ''?></span>
                            <input type="file" name="avatar"
                                <?php echo isset($errors['avatar']) ? 'class="border-error"' : '' ?>>

                            <button type="submit" class="site-btn">Зарегистрироваться</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Contact Section End -->


<!-- Instagram Begin -->
<?php
require 'components/instagram.php';
?>
<!-- Instagram End -->

<!-- Footer Section Begin -->
<?php
require 'components/footer.php';
?>
