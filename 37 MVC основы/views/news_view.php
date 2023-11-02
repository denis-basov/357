<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Новости</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- вид для отображения старницы с новостями -->
    <div class="container">
        <h1>Список новостей</h1>
        <a href="news.php">Новости</a>
        <a href="authors.php">Авторы</a>
        <a href="/">На главную</a>

        <div class="news-list">
            <?php foreach ($newsList as $newsItem):?>
                <div class="news-item">
                    <div class="news-img">
                        <a href="news-detail.php?newsId=<?=$newsItem['newsId']?>">
                            <img src="<?=$newsItem['image']?>" alt="<?=$newsItem['title']?>">
                        </a>
                    </div>
                    <div class="news-text">
                        <h2><?=$newsItem['title']?> ID: <?=$newsItem['newsId']?></h2>
                        <div>
                            <p>Дата публикации: <?= str_replace('-', '.', substr($newsItem['add_date'], 0, 10))?></p>
                            <p>Автор:
                                <a href="author-detail.php?authorId=<?=$newsItem['authorId']?>">
                                    <?=$newsItem['first_name'].' '.$newsItem['last_name']?>
                                </a>
                            </p>
                            <p>Категория: <span class="<?=$newsItem['class_name']?>"><?=$newsItem['category']?></span></p>
                            <a href="news-detail.php?newsId=<?=$newsItem['newsId']?>">Подробнее...</a>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        </div>
    </div>
</body>
</html>