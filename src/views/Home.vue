<template>
<div>
    <div class="header header__main header-home">
      <Navbar />
      <div class="header__center padding_normal">
          <div class="header__content">
              <h1 class="header__title">Текстильные продукции
                  высокого качества в Militex</h1>
              <p class="header__text">Militex является одним из ведущих производителей высококачественной 100% х/б пряжи экспортирующей продукцию собственного производства. </p>
              <router-link to="/modal" class="button">
                <p>Cвязаться</p>
                  <img src="../assets/img/arrow-right.svg" alt="">
              </router-link>
          </div>
          <div @click="scrollDown" class="scroll-down">
              <img src="../assets/img/arrow-down_double.svg" alt="" class="icon">
              <p>Scroll Down</p>
          </div>
      </div>
    </div>
    
    <div class="section section1 padding_normal">
      <Modal />
      <p class="section__sub">Продукты</p>
      <h2 class="section__title">У нас производиться такие такие продукты</h2>
      <div class="section1__cards">
          <div class="card">
              <span>01</span>
              <h3 class="card__title">
                  Хлопчатобумажная пряжа кардная <br>
                  Ne 32/1, 100%
              </h3>
              <p class="card__text">
                  Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...
              </p>
          </div>

          <div class="card">
              <span>02</span>
              <h3 class="card__title">
                  Пряжа 100% х/б, сурова, кардная, ткацкая,
  пневмопрядельная хлопчатобумажная OE NE 20/1

              </h3>
              <p class="card__text">
                  Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...
              </p>
          </div>

          <div class="card">
              <span>03</span>
              <h3 class="card__title">
                  Хлопчатобумажная пряжа кардная <br>
                  Ne 30/1, 100%
              </h3>
              <p class="card__text">
                  Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...
              </p>
          </div>

          <div class="card">
              <span>04</span>
              <h3 class="card__title">
                  Пряжа 100% х/б, сурова, кардная, ткацкая,пневмопрядельная хлопчатобумажная OE NE 12/1 

              </h3>
              <p class="card__text">
                  Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...</p>
          </div>



      </div>
      <router-link to="/modal" class="button">
          <p>Cвязаться</p>
          <img class="width_100" src="../assets/img/arrow-right_blue.png" alt="">
      </router-link>
  </div>

  <div class="section section2 padding_normal">
      <div class="divided">
          <div class="section2__content">
              <p class="section__sub pad_ver_3">
                  Мы в цыфрах
              </p>
              <h3 class="card__title">
                  Militex является одним из ведущих производителей нешей страны
              </h3>
              <p class="section__text">
                  Основные виды деятельности MILI TEX GROUP прядение волокон, оптовая торговля. Отличительны черты нашей организации – это создание и стратегическое развитие лучшей Узбекской текстильной компании мирового уровня, обеспечивающей текстильный рынок России, Европы и азиатские страны.
              </p>
              <div class="line__horizontal"></div>
              <div class="card__container">
                  <div class="card">
                      <h3 class="title__number">
                          14
                      </h3>
                      <p class="card__text">
                          Лет опыта на рынке 
                      </p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                          30
                      </h3>
                      <p class="card__text">
                          Тонн в сутки прядельного шелка
                      </p>
                  </div>

                  <div class="card">
                      <h3 class="title__number">
                          750
                      </h3>
                      <p class="card__text">
                          Сотруднтков работают в Militex 
                      </p>
                  </div>
              </div>
          </div>
          <div class="section2__image__container">
              <img class="section2__image" src="../assets/img/cotton-man.png" alt="">
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

  <div class="section section4 padding_normal">
      <p class="section__sub">
          НАШИ ПРЕИМУЩЕСТВА
      </p>
      <h2 class="section__title">
          Какие преимущества у нас есть перед другими
      </h2>
      <div class="padding_normal">
          <img class="width_100" src="../assets/img/cotton-rolls-info.png" alt="">
      </div>
  </div>

  <div class="section section5 padding_normal">
      <p class="section__sub">
          сотрудничество
      </p>
      <h2 class="section__title">
          C какими странами мы сотрудничаем?
      </h2>
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
              <p class="card__text">Великобритания</p>
          </div>

          <div class="card">
              <img src="../assets/img/flag-un.svg" alt="">
              <p class="card__text">Европейский Союз</p>
          </div>

      </div>
      <div class="padding_big">
      <img src="../assets/img/world-3d.png" alt="" class="width_100">

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
    },
    methods: {
      scrollDown(){
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'})
      }
    }
}

</script>