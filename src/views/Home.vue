<template>
<div>
    <div class="header header__main header-home">
      <Navbar />
      <div class="header__center padding_normal">
          <div class="header__content">
              <h1 class="header__title">Текстильные продукции
                  высокого качества в Militex</h1>
              <p class="header__text desktop-only">Militex является одним из ведущих производителей высококачественной 100% х/б <br class="desktop-only"> пряжи экспортирующей продукцию собственного производства. </p>
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
      <h2 class="section__title">У нас производиться <br> такие такие продукты</h2>
      <div class="section1__cards">
          <div class="card">
              <span>01</span>
            <router-link to="/product/01">
              <h3 class="card__title">
                  Хлопчатобумажная пряжа кардная <br class="desktop-only">
                  Ne 32/1, 100%
              </h3>
            </router-link>

              <p class="card__text">
                  Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...
              </p>
          </div>

          <div class="card">
              <span>02</span>
              <router-link to="/product/02">
              <h3 class="card__title">
                  Пряжа 100% х/б, сурова, кардная, ткацкая,
  пневмопрядельная хлопчатобумажная OE NE 20/1
              </h3>
            </router-link>
              <p class="card__text">
                  Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...
              </p>
          </div>

          <div class="card">
              <span>03</span>
              <router-link to="/product/03">
              <h3 class="card__title">
                  Хлопчатобумажная пряжа кардная <br class="desktop-only"> Ne 30/1, 100%
              </h3>
            </router-link>
              <p class="card__text">
                  Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...
              </p>
          </div>

          <div class="card">
              <span>04</span>
              <router-link to="/product/04">
              <h3 class="card__title">
                  Пряжа 100% х/б, сурова, кардная,<br class="desktop-only"> ткацкая,пневмопрядельная хлопчатобумажная OE NE 12/1 

              </h3>
            </router-link>
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
                  Militex является одним из ведущих <br class="desktop-only"> производи<span class="hyphen">-</span>телей нешей страны
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

  <div class="section section3 padding_normal">
      <div class="padding_normal bg_blue_dark pad_ver_5">
          <div class="section3__content">
              <h2>Cвяжитесь с нами и <br class="mobile-only">начните сотрудничес<span class="hyphen">  - </span>тво сегодня</h2>
              <p>Постепенно создавайте синергетические общие связи с помощью кросс<div class="desktop-only">-</div><br class="desktop-only">медийного интеллектуального капитала. с энтузиазмом</p>
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
      <div class="mobile-only">
        <div class="card">
        <div class="blue-text">
            01
        </div>
        <h3 class="card__title">
            Качество
        </h3>
        <div class="card__text">
            Высококачественной продукции соответ-ствующей всем нормам и предлагающей взаимовыгодное сотрудничество
        </div>
      </div>

      <div class="card">
        <div class="blue-text">
            02
        </div>
        <h3 class="card__title">
            Экологичность
        </h3>
        <div class="card__text">
            Экологичность производства и соответствие международным стандартам
        </div>
      </div>


      <div class="card">
        <div class="blue-text">
            03
        </div>
        <h3 class="card__title">
            Качество на все 100
        </h3>
        
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
              <p class="card__text">Великобритания</p>
          </div>
          <br class="desktop-only">
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
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CountUp from "vue-countup-v3";

export default {
    components: {
        Navbar,
        Footer,
        CountUp,
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
    }
}

</script>


<style scoped>
</style>