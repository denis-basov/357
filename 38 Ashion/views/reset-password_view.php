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
                        <h5>Восстановление пароля</h5>

                        <form method="POST">

                            <label>Введите адрес электронной почты:</label>
                            <span class="input-error"><?=$emailError ?? ''?></span>
                            <input type="text"
                                <?php echo isset($errors['login']) ? 'class="border-error"' : '' ?>
                                   name="email" placeholder="example@test.com">

                            <button type="submit" class="site-btn">Восстановить</button>
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
