<template>
    <div class="contact">
        <div class="header header__main bg_img_disabled">
            <Navbar />
        </div>
    
        <div class="banner pad_ver_3 padding_normal ">
            <p class="section__sub">
                Контакты
            </p>
            <h2 class="section__title">
                Cвяжитесь с нами и начните сотрудничество сегодня
            </h2>
        </div>
    
        <div class="section padding_normal contact__container">
            <div class="contacts">
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        Ташкент
                    </h3>
                    <a href="tel:+998990020629">+998 99 002-06-29</a>
                    <p>Чилонзор тумани, кўтарма маҳалласи, 14 А</p>
                </div>
    
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        Гулистон
                    </h3>
                    <a href="tel:+99871901675846">+998 71 90 167-58-46 </a>
                    <p>Сырдарьинская область, г. Гулистан, ул. Айланма 1</p>
                </div>
    
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        Гулистон
                    </h3>
                    <a href="tel:+998990730000">+998 99 073 00-00</a>
                    <p>Сырдарьинская область, Гулистан р-н, Зарбдор КФЙ Ишонч СИУ</p>
                </div>
            </div>
            <div class="contacts-image">
                <img src="../assets/img/uzb-3d.png" alt="" class="width_100">
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
    },
}

</script>