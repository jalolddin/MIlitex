<template>
    <header class="header__top padding_normal"
            :class="{
                'products-header' : isActive === '/products' | isActive === '/contacts',
                'about-header': isActive === '/about',
            }"
    >
        <div class="header__logo-container" :class="{'backDark': $route.path === '/'}">
           <router-link to="/">
               <img :src="logo_url" alt="" class="header__logo">
            </router-link>
        </div>

        <nav class="header__nav">
            <ul>
                <li class="header__nav__item">
                    <router-link v-html="$t('main')" to="/" :class="{'link_active': isActive === '/'}"></router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/about" :class="{'link_active': isActive === '/about'}" v-html="$t('about')"></router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/products" :class="{'link_active': isActive === '/products'}" v-html="$t('production')"></router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/contacts" :class="{'link_active': isActive === '/contacts'}" v-html="$t('contacts')"></router-link>
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
                    <router-link v-html="$t('main')" to="/" :class="{'link_active': isActive === '/'}"></router-link>
                </li>
                <li class="header__nav__item">
                    <router-link to="/about" :class="{'link_active': isActive === '/about'}" v-html="$t('about')"></router-link>
                </li>
                <li class="header__nav__item">
                    <router-link to="/products" :class="{'link_active': isActive === '/products'}" v-html="$t('production')"></router-link>
                </li>
                <li class="header__nav__item">
                    <router-link to="/contacts" :class="{'link_active': isActive === '/contacts'}" v-html="$t('contacts')"></router-link>
                </li>
            </div>
            <div class="bottom">
                <div :class="{'active': selectedLan === lan}" class="lang-item" @click="selectLang(lan)"  v-for="lan in languages" :key="lan">{{lan}}</div>
            </div>
        </div>
        <div style="cursor: pointer" @click="lanShow = !lanShow" class="language-picker desktop-only">
            <input  v-model="selectedLan" type="text" style="cursor: pointer; text-transform: uppercase">
            <img :src="arrw_down_icon_url" alt="">
        </div>
        <div v-if="lanShow" class="available__languages">
            <p class="npm" style="cursor: pointer" @click="selectLang(lan)" v-for="lan in languages" :key="lan">{{lan}}</p>
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
            languages: ['en', 'ru'],
            isActive: '/',
            logo_url: '',
            arrw_down_icon_url: '',
            hamburger_icon_url: '',
        }
    },
    created(){
        this.isActive = this.$route.fullPath
        this.selectedLan = localStorage.getItem('lang') 
        this.$i18n.locale = localStorage.getItem('lang')
        if (this.isActive != '/') {
            this.logo_url =  require('../assets/img/logo-colorful.svg');
            this.arrw_down_icon_url = require('../assets/img/arrow-down_blue_dark.svg');
            this.hamburger_icon_url = require('../assets/img/hamburger.svg');
        } else {
            this.logo_url =  require('../assets/img/logo-colorful.svg');
            this.arrw_down_icon_url = require('../assets/img/arrow-down_blue_dark.svg');
            this.hamburger_icon_url = require('../assets/img/hamburger.svg');

        }
    },
    methods: {
        selectLang(item){
            localStorage.setItem('lang', item)
            this.selectedLan = localStorage.getItem('lang') 
            this.$i18n.locale = item
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