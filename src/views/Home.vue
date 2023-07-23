<template>
<div>
    <div class="header header__main header-home">
      <Navbar />
      <div class="header__center padding_normal">
          <div class="header__content">
              <h1 class="header__title" v-html="$t('headerTitle')"></h1>
              <p class="header__text desktop-only" v-html="$t('headerDescription')"></p>
              <router-link to="/modal" class="button">
                <p v-html="$t('connect')"></p>
                  <img src="../assets/img/arrow-right.svg" alt="">
              </router-link>
          </div>
          <div @click="scrollDown" class="scroll-down">
              <img src="../assets/img/arrow-down_double.svg" alt="" class="icon">
              <p v-html="$t('scroll')"></p>
          </div>
      </div>
    </div>
    
    <div class="section section1 padding_normal">
      <Modal />
        <p class="section__sub" v-html="$t('production')"></p>
      <h2 class="section__title" v-html="$t('weProduct')"></h2>
      <div class="section1__cards">
          <div class="card">
              <span>01</span>
            <router-link to="/product/01">
              <h3 class="card__title" v-html="$t('cotton')"></h3>
            </router-link>

              <p class="card__text" v-html="$t('aboutCompany')"></p>
          </div>

          <div class="card">
              <span>02</span>
              <router-link to="/product/02">
              <h3 class="card__title" v-html="$t('yarn')"></h3>
            </router-link>
              <p class="card__text" v-html="$t('yarnDesc')"></p>
          </div>
      </div>
      <router-link to="/modal" class="button">
          <p v-html="$t('connect')"></p>
          <img class="width_100" src="../assets/img/arrow-right_blue.png" alt="">
      </router-link>
  </div>

  <div class="section section2 padding_normal">
      <div class="divided">
          <div class="section2__content">
              <p class="section__sub pad_ver_3" v-html="$t('inNumbers')"></p>
              <h3 class="card__title" v-html="$t('numberOne')"></h3>
              <p class="section__text" v-html="$t('mainDepartments')"></p>
              <div class="line__horizontal"></div>
              <div class="card__container">
                  <div class="card">
                      <h3 class="title__number">
                        <count-up :endVal="14" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text" v-html="$t('inMarket')"></p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                        
                        <count-up :end-val="30" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text" v-html="$t('tonns')"></p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                        <count-up :end-val="750" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text" v-html="$t('employees')"></p>
                  </div>
              </div>
          </div>
          <div class="section2__image__container">
              <img class="section2__image" src="../assets/img/cotton-man.png" alt="">
          </div>
      </div>
  </div>
  <div class="section section4 padding_normal">
      <p class="section__sub" v-html="$t('advantages')"></p>
      <h2 class="section__title" v-html="$t('whatAdvantages')"></h2>
      <div class="mobile-only">
        <div class="card">
        <div class="blue-text">
            01
        </div>
        <h3 class="card__title" v-html="$t('quality')"></h3>
        <div class="card__text" v-html="$t('qualityDesc')"></div>
      </div>

      <div class="card">
        <div class="blue-text">
            02
        </div>
        <h3 class="card__title" v-html="$t('ecological')"></h3>
        <div class="card__text" v-html="$t('ecologicalDesc')"></div>
      </div>


      <div class="card">
        <div class="blue-text">
            03
        </div>
        <h3 class="card__title" v-html="$t('quality100')"></h3>
        
      </div>

      <div class="padding_normal section4__image">
          <img class="width_100" src="../assets/img/rolls-small.png" alt="">
      </div>
      </div>
      <div class="padding_normal desktop-only">
          <img class="width_100" src="../assets/img/cotton-rolls-info.png" alt="">
      </div>
  </div>

  <div class="section section5 padding_normal">
      <p class="section__sub" v-html="$t('cooperation')"></p>
      <h2 class="section__title" v-html="$t('countries')"></h2>
      <p class="section__text" v-html="$t('export')"></p>
      <div class="section5__countries">
          <div class="card">
              <img src="../assets/img/flag-china.svg" alt="">
              <p class="card__text" v-html="$t('china')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-russia.svg" alt="">
              <p class="card__text" v-html="$t('russia')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-turkey.png" alt="">
              <p class="card__text" v-html="$t('turkey')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-egypt.svg" alt="">
              <p class="card__text" v-html="$t('egypt')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-poland.svg" alt="">
              <p class="card__text" v-html="$t('polish')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-kazaxstan.svg" alt="">
              <p class="card__text" v-html="$t('kazax')"></p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-uk.svg" alt="">
              <p class="card__text" v-html="$t('uk')"></p>
          </div>
          <br class="desktop-only">
          <div class="card">
              <img src="../assets/img/flag-un.svg" alt="">
              <p class="card__text" v-html="$t('union')"></p>
          </div>

      </div>
      <div class="padding_big">
      <img src="../assets/img/world-3d.png" alt="" class="width_100">

      </div>
  </div>
    <ContactSection />
  <Footer />
</div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CountUp from "vue-countup-v3";
import ContactSection from '../components/ContactSection.vue'
export default {
    components: {
        Navbar,
        Footer,
        CountUp,
        ContactSection
    },
    data() {
        return { 
            counterOptions: {
                enableScrollSpy: true,
            }        
        }
    },
    methods: {
      scrollDown(){
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'})
      },
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        // ScrollTrigger.normalizeScroll(true)
        const boxes = gsap.utils.toArray('.header__content');
        const sectionCards = gsap.utils.toArray('.section1__cards')
        const sectionTitle = gsap.utils.toArray('.section__title')
        const button = gsap.utils.toArray('.button')
        const devide_1 = gsap.utils.toArray('.section2__content')
        const devide_2 = gsap.utils.toArray('.section2__image__container')
        const callText = gsap.utils.toArray('.section3__content')
        const desktopOnly = gsap.utils.toArray('.desktop-only')
        const mobileOnly = gsap.utils.toArray('.mobile-only')
        const flags = gsap.utils.toArray('.section5__countries')
        const maps = gsap.utils.toArray('.padding_big')
        const footer = gsap.utils.toArray('.padding_big')


        footer.forEach((box, i) => {
    const anim = gsap.fromTo(box, {autoAlpha: 0, transform: 'translateY(7vw)', opacity: 0}, {duration: 1, autoAlpha: 1, transform: 'translateY(0vw)', opacity: 1});
    ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });

    boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    sectionCards.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
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
    devide_1.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    devide_2.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
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
    flags.forEach((info, i) => {
    const anim = gsap.fromTo(info, {autoAlpha: 0, transform: 'translateX(-5%)'}, {duration: 2, autoAlpha: 1, transform: 'translateX(0)' ,});
    ScrollTrigger.create({
        trigger: info,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
    });
    maps.forEach((info, i) => {
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


<style scoped>
</style>