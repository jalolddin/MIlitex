<template>
    <div>
        <div class="header header__main bg_img_disabled">
            <Navbar />
        </div>
    
        <div class="banner pad_ver_3 padding_normal">
            <p class="section__sub">
                Продукция
            </p>
            <h2 class="section__title">
                У нас производиться <br> такие продукции
            </h2>
        </div>
    
        <div class="section padding_normal">
            <p class="section__sub">
                Продукция
            </p>
            <h2 class="section__title">
                У нас производиться <br> такие Продукция
            </h2>
            <div class="all-products">
                <div class="all-products__item wrap-reverse">
                    <div class="all-products__item-image firstImage">
                        <img src="../assets/img/pp1.png" alt="">
                    </div>
                    <div class="all-products__item-content firstText">
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
                    <div class="all-products__item-content secondText">
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
    
                    <div class="all-products__item-image secondImage">
                        <img src="../assets/img/pp2.png" alt="">
                    </div>
                </div>
    
                <div class="all-products__item wrap-reverse">
                    <div class="all-products__item-image firstImage">
                        <img src="../assets/img/pp3.png" alt="">
                    </div>
                    <div class="all-products__item-content firstText">
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
                Оборудование
            </p>
            <h2 class="section__title">
                Наши продукции производится новейшими технологиями
            </h2>
            <div class="width_100">
                    <swiper
                        :slides-per-view="1"
                        :space-between="50"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        :ref="swiper"
                        >
                            <swiper-slide>
                                <div class="all-products__item pad_ver_1">
                                    <div class="all-products__item-image firstImage">
                                        <img src="../assets/img/pp4.png" alt="">
                                    </div>
                                    <div class="all-products__item-content firstText">
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
                                            <span class="button" @click="prevSlide()">
                                                <img src="../assets/img/arrow-left_outlined.svg" alt="">
                                            </span>
                                            <span class="button" @click="nextSlide()">
                                                <img src="../assets/img/arrow-right_outlined.svg" alt="">
                                            </span>
                                        </div>
                        
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
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
                                            <span class="button" @click="prevSlide()">
                                                <img src="../assets/img/arrow-left_outlined.svg" alt="">
                                            </span>
                                            <span class="button" @click="nextSlide()">
                                                <img src="../assets/img/arrow-right_outlined.svg" alt="">
                                            </span>
                                        </div>
                        
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
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
                                            <span class="button" @click="prevSlide()">
                                                <img src="../assets/img/arrow-left_outlined.svg" alt="">
                                            </span>
                                            <span class="button" @click="nextSlide()">
                                                <img src="../assets/img/arrow-right_outlined.svg" alt="">
                                            </span>
                                        </div>
                        
                                    </div>
                                </div>
                            </swiper-slide>
                    </swiper>
                
            </div>
        </div>
    
        <div class="section section3 padding_normal">
            <div class="padding_normal bg_green_dark pad_ver_5">
                <div class="section3__content">
                    <h2>Cвяжитесь с нами и начните сотрудничество сегодня</h2>
                    <p>Постепенно создавайте синергетические общие связи с помощью кросс-<br class="desktop-only"> медийного интеллектуального капитала. с энтузиазмом</p>
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
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import {Swiper, SwiperSlide} from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const nextSlide = ref(null);
        const prevSlide = ref(null);
        const onSwiper = (swiper) => {
            console.log(swiper);
            nextSlide.value = () => {swiper.slideNext()};   
            prevSlide.value = () => {swiper.slidePrev()};
            console.log(swiper.slideNext);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const swiper = ref(null);
        return {
            onSwiper,
            onSlideChange,
            swiper,
            nextSlide,
            prevSlide,
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.normalizeScroll(true)
        const sectionTitle = gsap.utils.toArray('.section__title')
        const callText = gsap.utils.toArray('.section3__content')
        const desktopOnly = gsap.utils.toArray('.desktop-only')
        const mobileOnly = gsap.utils.toArray('.mobile-only')
        const footer = gsap.utils.toArray('.footer__container')
        const firstImage = gsap.utils.toArray('.firstImage')
        const firstText = gsap.utils.toArray('.firstText')
        const secondImage = gsap.utils.toArray('.secondImage')
        const secondText = gsap.utils.toArray('.secondText')

        firstImage.forEach((info, i) => {
        const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
        ScrollTrigger.create({
            trigger: info,
            animation: anim,
            toggleActions: 'play none none none',
            once: true,
        });
        });
        firstText.forEach((info, i) => {
        const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
        ScrollTrigger.create({
            trigger: info,
            animation: anim,
            toggleActions: 'play none none none',
            once: true,
        });
        });
        secondImage.forEach((info, i) => {
        const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
        ScrollTrigger.create({
            trigger: info,
            animation: anim,
            toggleActions: 'play none none none',
            once: true,
        });
        });
        secondText.forEach((info, i) => {
        const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
        ScrollTrigger.create({
            trigger: info,
            animation: anim,
            toggleActions: 'play none none none',
            once: true,
        });
        });
        footer.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, transform: 'translateY(7vw)', opacity: 0}, {duration: 1, autoAlpha: 1, transform: 'translateY(0vw)', opacity: 1});
        ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });

    sectionTitle.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    callText.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    desktopOnly.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    mobileOnly.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(20%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
}
}

</script>