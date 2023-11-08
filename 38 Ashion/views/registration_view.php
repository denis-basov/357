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

                            <span class="input-error"></span>
                            <input type="text" name="firstName" placeholder="Имя">

                            <span class="input-error"></span>
                            <input type="text" name="lastName" placeholder="Фамилия">

                            <span class="input-error"></span>
                            <input type="text" name="login" placeholder="Логин">

                            <span class="input-error"></span>
                            <input type="text" name="email" placeholder="Электронный адрес">

                            <span class="input-error"></span>
                            <input type="password" name="password" placeholder="Пароль">

                            <span class="input-error"></span>
                            <label>Аватар:</label>
                            <input type="file" name="avatar" value="аватар">

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
