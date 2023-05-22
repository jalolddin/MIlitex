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
                     О Militex
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/products" :class="{'link_active': isActive === '/products'}">
                    Продукты
                  </router-link>
                </li>
                <li class="header__nav__item">
                  <router-link to="/contacts" :class="{'link_active': isActive === '/contacts'}">
                    Контакты
                  </router-link>
                </li>
            </ul>
        </nav>
        <div class="language-picker">
            <p class="npm">EN</p>
            <img :src="arrw_down_icon_url" alt="">
        </div>
    </header>
</template>
<script>

export default{
    data() {
        return {
            isActive: '/',
            logo_url: '',
            arrw_down_icon_url: '',
        }
    },
    created(){
        this.isActive = this.$route.fullPath
        if (this.isActive != '/') {
            this.logo_url =  require('../assets/img/logo-colorful.svg');
            this.arrw_down_icon_url = require('../assets/img/arrow-down_blue_dark.svg')
        } else {
            this.logo_url = require('../assets/img/logo.png');
            this.arrw_down_icon_url = require('../assets/img/arrow-down.svg')
        }
    //    console.log(h = this.isActive) 
    },
}
</script>