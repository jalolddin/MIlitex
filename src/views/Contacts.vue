<template>
    <div class="contact">
        <div class="header header__main bg_img_disabled">
            <Navbar />
        </div>
    
        <div class="banner pad_ver_3 padding_normal ">
            <p class="section__sub" v-html="$t('contacts')"></p>
            <h2 class="section__title" v-html="$t('contactUs')"></h2>
        </div>
    
        <div class="section padding_normal contact__container">
            <div class="contacts">
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        {{ $t('tashkent') }}
                    </h3>
                    <a href="tel:+998990020629">+998 99 002-06-29</a>
                    <p v-html="$t('tashkentAddress')"></p>
                </div>
    
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        {{ $t('guliston') }}
                    </h3>
                    <a href="tel:+99871901675846">+998 71 90 167-58-46 </a>
                    <p v-html="$t('gulistonAddress')"></p>
                </div>
    
                <div class="contact__item">
                    <h3 class="card__title">
                        <img src="../assets/img/location-marker.svg" alt="">
                        {{ $t('guliston') }}
                    </h3>
                    <a href="tel:+998990730000">+998 99 073 00-00</a>
                    <p v-html="$t('gulistonAddress2')"></p>
                </div>
            </div>
            <div class="contacts-image">
                <img src="../assets/img/uzb3d.png" alt="" class="width_100">
            </div>
        </div>
    <Footer />
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
    components: {
        Navbar,
        Footer
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.normalizeScroll(true)
        const sectionTitle = gsap.utils.toArray('.section__title')
        const callText = gsap.utils.toArray('.section3__content')
        const desktopOnly = gsap.utils.toArray('.desktop-only')
        const mobileOnly = gsap.utils.toArray('.mobile-only')
        const footer = gsap.utils.toArray('.footer__container')
        const contacts = gsap.utils.toArray('.contacts')
        const contactsImage = gsap.utils.toArray('.contacts-image')



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
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    contactsImage.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    contacts.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    callText.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    desktopOnly.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    mobileOnly.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
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