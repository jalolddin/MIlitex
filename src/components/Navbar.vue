<template>
    <header class="header__top padding_normal"
            :class="{
                'products-header' : isActive === '/products' | isActive === '/contacts',
                'about-header': isActive === '/about',
            }"
    >
        <div class="header__logo-container">
           <router-link to="/">
               <img :src="logo_url" alt="" class="header__logo">
            </router-link>
        </div>

        <nav class="header__nav">
            <ul>
                <li class="header__nav__item">
                    <router-link to="/" :class="{'link_active': isActive === '/'}" >
                        Главная
                    </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/about" :class="{'link_active': isActive === '/about'}">
                     О Mili Tex Group
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/products" :class="{'link_active': isActive === '/products'}">
                    Продукция
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/contacts" :class="{'link_active': isActive === '/contacts'}">
                    Контакты
                  </router-link>
                </li>
            </ul>
        </nav>
        <div class="navbar-hidden padding_normal">
            <div class="top divided">
                <router-link to="/">
                    <div>
                        <img class="width_100" src="../assets/img/logo-blue.svg" alt="">
                    </div>
                </router-link>

                <div @click="closeNavbar">
                    <img src="../assets/img/cancel-outlined_blue.svg" alt="">
                </div>
            </div>
            <div class="center">
                <p class="section__sub">
                    Страницы
                </p>
                <li class="header__nav__item">
                    <router-link to="/" :class="{'link_active': isActive === '/'}" >
                        Главная
                    </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/about" :class="{'link_active': isActive === '/about'}">
                     О Mili Tex Group
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/products" :class="{'link_active': isActive === '/products'}">
                    Продукция
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/contacts" :class="{'link_active': isActive === '/contacts'}">
                    Контакты
                  </router-link>
                </li>
            </div>
            <div class="bottom">
                <div class="lang-item">O`ZB</div>
                <div class="lang-item active">РУС</div>
                <div class="lang-item">ENG</div>
            </div>
        </div>
        <div @click="lanShow = !lanShow" class="language-picker desktop-only">
            <input v-model="selectedLan" type="text">
            <img :src="arrw_down_icon_url" alt="">
        </div>
        <div v-if="lanShow" class="available__languages">
            <p class="npm" @click="selectLang(lan)" v-for="lan in languages" :key="lan">{{lan}}</p>
        </div>
        <div class="hamburger" @click="openNavbar" >
            <img :src="hamburger_icon_url" alt="">
        </div>
    </header>
</template>
<script>

export default{
    data() {
        return {
            selectedLan: 'RU',
            lanShow: false,
            languages: ['UZ', 'EN', 'RU'],
            isActive: '/',
            logo_url: '',
            arrw_down_icon_url: '',
            hamburger_icon_url: '',
        }
    },
    created(){
        this.isActive = this.$route.fullPath
        if (this.isActive != '/') {
            this.logo_url =  require('../assets/img/logo-colorful.svg');
            this.arrw_down_icon_url = require('../assets/img/arrow-down_blue_dark.svg');
            this.hamburger_icon_url = require('../assets/img/hamburger.svg');
        } else {
            this.logo_url = require('../assets/img/logo.png');
            this.arrw_down_icon_url = require('../assets/img/arrow-down.svg');
            this.hamburger_icon_url  = require('../assets/img/hamburger-white.svg');
        }
    //    console.log(h = this.isActive) 
    },
    methods: {
        selectLang(item){
            this.selectedLan = item
            this.lanShow = false
        },
        openNavbar() {
            const navbar = document.querySelector('.navbar-hidden');
            navbar.classList.add('navbar-hidden_active');
        },
        closeNavbar() {
            const navbar = document.querySelector('.navbar-hidden');
            navbar.classList.remove('navbar-hidden_active');
        }
    }
}
</script>