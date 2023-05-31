<template>
<div>
  <div class="header header__main bg_img_disabled">
    <Navbar />
</div>

<div class="banner pad_ver_3 padding_normal">
    <p class="section__sub">
        О Нас
    </p>
    <h2 class="section__title">
        Вы можете узнать про <br> нашу историю
    </h2>
</div>


<div class="section section2 padding_normal">
    <div class="divided">
        <div class="section2__content">
            <p class="section__sub pad_ver_3">
                Мы в цыфрах
            </p>
            <h3 class="card__title">
                Militex является одним из ведущих <br class="desktop-only"> производителей нешей страны
            </h3>
            <p class="section__text">
                Основные виды деятельности MILI TEX GROUP прядение волокон, оптовая торговля. Отличительны черты нашей организации – это создание и стратегическое развитие лучшей Узбекской текстильной компании мирового уровня, обеспечивающей текстильный рынок России, Европы и азиатские страны.
            </p>
            <div class="line__horizontal"></div>
            <div class="card__container">
                  <div class="card">
                      <h3 class="title__number">
                        <count-up :endVal="14" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text">
                          Лет опыта <br class="desktop-only"> на рынке 
                      </p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                        
                        <count-up :end-val="30" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text">
                          Тонн в сутки <br class="desktop-only"> прядельного шелка
                      </p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                        <count-up :end-val="750" :options="counterOptions"></count-up>

                      </h3>
                      <p class="card__text">
                          Сотруднтков работают <br class="desktop-only"> в Militex 
                      </p>
                  </div>
              </div>
        </div>
        <div class="section2__image__container">
            <img class="section2__image" src="../assets/img/cotton-man.png" alt="">
        </div>
    </div>
</div>


<div class="section padding_normal">
    <p class="section__sub">кому мы можем помочь</p>
    <h2 class="section__title">У нас производиться <br> такие такие продукты</h2>
</div>

<!-- stupid cards container -->
<div class="gallery">
    <div class="card gallery__item_1">
        <img src="../assets/img/product1.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_2">
        <img src="../assets/img/product2.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_3">
        <img src="../assets/img/product3.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_4">
        <img src="../assets/img/product4.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_5">
        <img src="../assets/img/product5.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_6">
        <img src="../assets/img/product6.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_7">
        <h3 class="card__title">
            Сложные заказы любых объемах
        </h3>
        <p class="card__text">Militex является одним из ведущих <br class="desktop-only"> производителей высококачественной 100% х/<br class="desktop-only">б пряжи экспортирующей продукцию <br class="desktop-only"> собственного производства. Наши <br class="desktop-only"> производственные мощности позволяют<br class="desktop-only">выполнять самые сложные заказы в любых<br class="desktop-only"> объемах. Имея соответствующую<br class="desktop-only"> производственную базу, которая состоит из<br class="desktop-only"> сотрудников с большим опытом работы и<br class="desktop-only"> современного оборудования,<br class="desktop-only"> компания выпускает продукции,<br class="desktop-only"> экологичность производства и соответствие<br class="desktop-only"> международным стандартам. </p>
    </div>
    <div class="card gallery__item_8">
        <img src="../assets/img/woman-worker.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_9">
        <img src="../assets/img/product8.jpg" alt="" class="width_100">
    </div>
    <div class="card gallery__item_10">
        <img src="../assets/img/product9.jpg" alt="" class="width_100">
    </div>
</div>

<ContactSection />

<div class="section section5 padding_normal">
    <p class="section__sub">
        сотрудничество
    </p>
    <h2 class="section__title">
        C какими странами мы сотрудничаем?
    </h2>
    <p class="section__text">
        Мы экспортируем свою продукцию во многие страны, а именно: Россия, <br class="desktop-only"> Китай, Турция и другие. 
    </p>
    <div class="section5__countries">
        <div class="card">
            <img src="../assets/img/flag-china.svg" alt="">
            <p class="card__text">Китай</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-russia.svg" alt="">
            <p class="card__text">Россия</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-turkey.png" alt="">
            <p class="card__text">Турция</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-egypt.svg" alt="">
            <p class="card__text">Египет</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-poland.svg" alt="">
            <p class="card__text">Польша</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-kazaxstan.svg" alt="">
            <p class="card__text">Казахстан</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-uk.svg" alt="">
            <p class="card__text">Великобрита<br class="mobile-only">ния</p>
        </div>

        <div class="card">
            <img src="../assets/img/flag-un.svg" alt="">
            <p class="card__text">Европейский<div class="mobile-only"></div>Союз</p>
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
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CountUp from "vue-countup-v3";
import ContactSection from '../components/ContactSection.vue'
export default {
    components: {
        Navbar,
        CountUp,
        Footer,
        ContactSection
    },
    data() {
        return { 
            counterOptions: {
                enableScrollSpy: true,
            }        
        }
    },
}
</script>