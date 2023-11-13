<?php
require 'components/header.php';
?>
<!-- Header Section End -->

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-md-12 my-5">

            <div class="blog__comment__item mb-5">
                <div class="blog__comment__item__pic">
                    <img src="<?=$userInfo['image']?>" alt="<?=$userInfo['first_name'].' '.$userInfo['last_name']?>">
                </div>
                <div class="blog__comment__item__text">
                    <h6><?=$userInfo['first_name'].' '.$userInfo['last_name']?></h6>
                    <p>Логин: <?=$userInfo['login']?></p>
                    <p>Адрес электронной почты: <?=$userInfo['email']?></p>
                    <p>Дата регистрации: <?=$userInfo['add_date']?></p>
                    <p>Дата последнего изменения: <?=$userInfo['update_date']?></p>
                    <a href="reset-password.php">Изменение пароля</a>
                </div>
            </div>

        </div>
    </div>
</div>

<!-- Instagram Begin -->
<?php
require 'components/instagram.php';
?>
<!-- Instagram End -->

<!-- Footer Section Begin -->
<?php
require 'components/footer.php';
?>
