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

                        <!-- если пароль отправлен на почту  -->
                        <?php if( isset($_GET['reset']) && $_GET['reset'] === 'success'):?>
                            <p>Пароль отправлен на указанную электронную почту</p>
                            <h3>Для входа на сайт пройдите по <a href="enter.php">ссылке.</a></h3>
                        <?php else: ?>
                            <form method="POST">

                                <label>Введите адрес электронной почты:</label>
                                <span class="input-error"><?=$emailError ?? ''?></span>
                                <input type="text"
                                    <?php echo isset($emailError) ? 'class="border-error"' : '' ?>
                                       name="email" placeholder="example@test.com"
                                       value="<?=$email ?? ''?>">

                                <button type="submit" class="site-btn">Восстановить</button>
                            </form>
                        <?php endif; ?>
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
