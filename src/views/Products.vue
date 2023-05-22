<template>
    <div>
        <div class="header header__main bg_img_disabled">
            <Navbar />
        </div>
    
        <div class="banner pad_ver_3 padding_normal">
            <p class="section__sub">
                Продукты
            </p>
            <h2 class="section__title">
                У нас производиться такие такие продукты
            </h2>
        </div>
    
        <div class="section padding_normal">
            <p class="section__sub">
                Продукты
            </p>
            <h2 class="section__title">
                У нас производиться такие такие продукты
            </h2>
            <div class="all-products">
                
                <div class="all-products__item">
                    <div class="all-products__item-image">
                        <img src="../assets/img/pp1.png" alt="">
                    </div>
                    <div class="all-products__item-content">
                        <h3 class="card__title">
                            Ne 32/1, 100%
                        </h3>
                        <p class="section__text">
                            У нас имеется новейшие оборудование (Швейцария), 
                            TRUTZSCHLER, SAUREP JINTAN,
                            Schlafhorst Autoconer 6 и многое другое.
                            Производственные мощности прядильного производства
                            сегодня перерабатывают 25 тонн сырья в сутки.
                        </p>
                    </div>
                </div>
    
    
                <div class="all-products__item">
                    <div class="all-products__item-content">
                        <h3 class="card__title">
                            Хлопчатобумажная пряжа кардная
                            Ne 30/1, 100%
                        </h3>
                        <p class="section__text">
                            Rieter (Щвейцария), Savio (Италия) SAURER JITAN и много другое.
                            Производственные мощности прядильного производства сегодня
                            перерабатывают 10 тонн сырья в сутки.
                        </p>
                    </div>
    
                    <div class="all-products__item-image">
                        <img src="../assets/img/pp2.png" alt="">
                    </div>
                </div>
    
                <div class="all-products__item">
                    <div class="all-products__item-image">
                        <img src="../assets/img/pp3.png" alt="">
                    </div>
                    <div class="all-products__item-content">
                        <h3 class="card__title">
                            Хлопчатобумажная пряжа кардная
                            пневмопрядельная
                            Ne 32/1, 100%
                        </h3>
                        <p class="section__text">
                            Встречайте новый Nissan Pathfinder! Оцените по достоинству его впечатляющий дизайн. Выразительные простые линии придают кузову современный, решительный внешний вид. Хотите проявить больше индивидуальности?
                            Выбирайте двухцветную окраску кузова!Светодиодные фары и ходовые огни в сочетании с массивной решеткой радиатора V–Motion делают внешность Nissan Pathfinder заметной и запоминающейся.
                        </p>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="section padding_normal products__slider">
            <p class="section__sub">
                Аборудование
            </p>
            <h2 class="section__title">
                Наши продукты производится новейшими технологиями
            </h2>
            <div class="all-products__item">
                <div class="all-products__item-image">
                    <img src="../assets/img/pp4.png" alt="">
                </div>
                <div class="all-products__item-content">
                    <p class="section__text fw_700 mba">1/3</p>
    
                    <div>
                        <h3 class="card__title">
                            Schlafhorst Autoconer 6
                        </h3>
                        <p class="section__text">
                            Встречайте новый Nissan Pathfinder! Оцените по достоинству его впечатляющий дизайн. Выразительные простые линии придают кузову современный, решительный внешний вид. Хотите проявить больше индивидуальности?
                            
                        </p>
                        <p class="section__text">
                            Выбирайте двухцветную окраску кузова!Светодиодные фары и ходовые огни в сочетании с массивной решеткой радиатора V–Motion делают внешность Nissan Pathfinder заметной и запоминающейся.
                        </p>
                    </div>
    
                    <div class="mta button__container">
                        <span class="button">
                            <img src="../assets/img/arrow-left_outlined.svg" alt="">
                        </span>
                        <span class="button">
                            <img src="../assets/img/arrow-right_outlined.svg" alt="">
                        </span>
                    </div>
    
                </div>
            </div>
        </div>
    
    
        <div class="section section3 padding_normal">
            <div class="padding_normal bg_blue_dark pad_ver_5">
                <div class="section3__content">
                    <h2>Cвяжитесь с нами и начните сотрудничество сегодня</h2>
                    <p>Постепенно создавайте синергетические общие связи с помощью кросс-медийного интеллектуального капитала. с энтузиазмом</p>
                    <router-link to="/modal" class="button">
                        <p>Cвязаться</p>
                        <img src="../assets/img/arrow-right.svg" alt="">
                    </router-link>
                </div>
            </div>  
        </div>
    <Footer />
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Navbar,
        Footer
    }
}

</script>