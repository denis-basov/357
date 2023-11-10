<?php
// шаблон для отображения страницы детального просмотра новости
require 'components/header.php';
?>

<!-- Breadcrumb Begin -->
<div class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__links">
                    <a href="index.php"><i class="fa fa-home"></i> Home</a>
                    <a href="./blog.php">Blog</a>
                    <span><?=$newsItem['newsTitle']?></span>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb End -->

<!-- Blog Details Section Begin -->
<section class="blog-details spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <div class="blog__details__content">
                    <div class="blog__details__item">
                        <img src="<?=$newsItem['image']?>" alt="<?=$newsItem['newsTitle']?>">
                        <div class="blog__details__item__title">
                            <span class="tip px-5 py-2  <?=$newsItem['class_name']?>"><?=$newsItem['categoryTitle']?></span>
                            <h4><?=$newsItem['newsTitle']?></h4>
                            <ul>
                                <li><span><?=$newsItem['first_name'].' '.$newsItem['last_name']?></span></li>
                                <li><?=$newsItem['add_date']?></li>
                                <li>Комментариев: <?=$commentsCount?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blog__details__desc">
                        <p><?=$newsItem['text']?></p>
                    </div>
                    <div class="blog__details__tags">
                        <?php foreach ($categories as $category):?>
                            <a href="<?=$category['id']?>" class="<?=$category['class_name']?> text-white"><?=$category['translation']?></a>
                        <?php endforeach;?>
                    </div>
                    <div class="blog__details__btns">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="blog__details__btn__item">
                                    <h6><a href="#"><i class="fa fa-angle-left"></i> Previous posts</a></h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="blog__details__btn__item blog__details__btn__item--next">
                                    <h6><a href="#">Next posts <i class="fa fa-angle-right"></i></a></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- comments   -->
                    <div class="blog__details__comment">
                        <h5>Комментариев: <?=$commentsCount?></h5>

                        <?php if( isset($_SESSION['userId']) ):?>
                            <a href="#" class="leave-btn">Оставить комментарий</a>
                        <?php else:?>
                            <a href="enter.php" class="leave-btn">Для добавления комментария авторизуйтесь</a>
                        <?php endif;?>

                        <?php foreach ($comments as $comment):?>
                        <div class="blog__comment__item mb-5">
                            <div class="blog__comment__item__pic">
                                <img src="<?=$comment['image']?>" alt="<?=$comment['last_name'].' '. mb_substr($comment['first_name'], 0, 1)?>">
                            </div>
                            <div class="blog__comment__item__text">
                                <h6><?=$comment['last_name'].' '.$comment['first_name']?></h6>
                                <p><?= str_replace("\r\n", '</p><p>', $comment['comment'])?></p>
                                <ul>
                                    <li><i class="fa fa-clock-o"></i><?=$comment['add_date']?></li>
                                    <li><i class="fa fa-heart-o"></i> 12</li>
                                    <li><i class="fa fa-share"></i> 1</li>
                                </ul>
                            </div>
                        </div>
                        <?php endforeach;?>
                    </div>
                    <!-- comments   -->
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="blog__sidebar">
                    <div class="blog__sidebar__item">
                        <div class="section-title">
                            <h4>Categories</h4>
                        </div>
                        <ul>
                            <li><a href="#">All <span>(250)</span></a></li>
                            <li><a href="#">Fashion week <span>(80)</span></a></li>
                            <li><a href="#">Street style <span>(75)</span></a></li>
                            <li><a href="#">Lifestyle <span>(35)</span></a></li>
                            <li><a href="#">Beauty <span>(60)</span></a></li>
                        </ul>
                    </div>
                    <div class="blog__sidebar__item">
                        <div class="section-title">
                            <h4>Feature posts</h4>
                        </div>
                        <a href="#" class="blog__feature__item">
                            <div class="blog__feature__item__pic">
                                <img src="img/blog/sidebar/fp-1.jpg" alt="">
                            </div>
                            <div class="blog__feature__item__text">
                                <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                <span>Seb 17, 2019</span>
                            </div>
                        </a>
                        <a href="#" class="blog__feature__item">
                            <div class="blog__feature__item__pic">
                                <img src="img/blog/sidebar/fp-2.jpg" alt="">
                            </div>
                            <div class="blog__feature__item__text">
                                <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                <span>Seb 17, 2019</span>
                            </div>
                        </a>
                        <a href="#" class="blog__feature__item">
                            <div class="blog__feature__item__pic">
                                <img src="img/blog/sidebar/fp-3.jpg" alt="">
                            </div>
                            <div class="blog__feature__item__text">
                                <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                <span>Seb 17, 2019</span>
                            </div>
                        </a>
                    </div>
                    <div class="blog__sidebar__item">
                        <div class="section-title">
                            <h4>Tags cloud</h4>
                        </div>
                        <div class="blog__sidebar__tags">
                            <a href="#">Fashion</a>
                            <a href="#">Street style</a>
                            <a href="#">Diversity</a>
                            <a href="#">Beauty</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Blog Details Section End -->

    <!-- Instagram Begin -->
<?php
require 'components/instagram.php';
?>
    <!-- Instagram End -->

    <!-- Footer Section Begin -->
<?php
require 'components/footer.php';
?>