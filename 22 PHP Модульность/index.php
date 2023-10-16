<?php
// главная страница
    // объявляем переменные, которые используются на странице
    $title = 'Главная страница';
    $headerTitle = 'Шапка главной страницы';
    $footerTitle = 'Подвал главной страницы';

    $titleClass = 'main-title';

    require 'components/header.php';// подключаем шапку сайта
?>

    <!-- Основной контент главной страницы   -->
    <div class="main-page">
        <h2 class="<?=$titleClass?>"><?=$title?></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos dolore exercitationem in incidunt neque quo sequi totam vitae voluptate.</p>
    </div>

<?php
    include 'components/footer.php';// подключаем подвал сайта
?>