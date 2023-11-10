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
                        <h5>Вход</h5>

                        <form method="POST">

                            <span class="input-error"><?=$errors['login'] ?? ''?></span>
                            <input type="text"
                                <?php echo isset($errors['login']) ? 'class="border-error"' : '' ?>
                                   name="login" placeholder="Логин"
                                   value="<?=$input['login'] ?? ''?>">

                            <div>
                                <span class="input-error"><?=$errors['password'] ?? ''?></span>
                                <input type="password"
                                    <?php echo isset($errors['password']) ? 'class="border-error"' : '' ?>
                                       name="password" placeholder="Пароль"
                                       value="<?=$input['password'] ?? ''?>">
                                <button class="mb-3" id="show-password">Показать пароль</button>
                            </div>

                            <button type="submit" class="site-btn">Войти</button>

                            <a href="reset-password.php" class="ml-3">Забыли пароль?</a>
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
