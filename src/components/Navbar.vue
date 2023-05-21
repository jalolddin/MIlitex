<template>
    <header class="header__top padding_normal">
        <div class="header__logo-container">
           <router-link to="/">
               <img  src="../assets/img/logo.png" alt="" class="header__logo">
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
            <img src="../assets/img/arrow-down.svg" alt="">
        </div>
    </header>
</template>
<script>
export default{
    data() {
        return {
            isActive: '/'
        }
    },
    created(){
        this.isActive = this.$route.fullPath
    //    console.log(h = this.isActive) 
    },
}
</script>