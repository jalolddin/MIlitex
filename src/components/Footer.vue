<template>
    
<footer id="footer" class="footer">
    <div class="footer__content padding_normal">
        <div class="footer__container">
            <div class="card centered footer-logo">
                <div class="desktop-only">
                    <img src="../assets/img/logo-colorful.svg" alt="" class="width_100">
                </div>

                <div class="card__container">
                    <a href="https://t.me/MILITEX_ISMOIL"><img src="../assets/img/telegram.svg" alt="" class="width_100"></a>
                    <a href="https://instagram.com/mili_tex_group?igshid=MzRlODBiNWFlZA=="><img src="../assets/img/instagram.svg" alt="" class="width_100"></a>
                    <a style="margin-top: 2px" href="weixin://dl/chat?{Is5233935}"><img src="../assets/img/WeChat.svg" alt="" class="width_100"></a>

                </div>
            </div>
            <div class="card footer-pages">
                <p class="footer__title" v-html="$t('pages')"></p>
                <div class="footer-pages-inner">
                    <p class="footer__text"><router-link to="/" v-html="$t('main')"></router-link></p>
                    <p class="footer__text"><router-link to="/about" v-html="$t('about')"></router-link></p>
                    <p class="footer__text"><router-link to="/production" v-html="$t('production')"></router-link></p>
                    <p class="footer__text"><router-link to="/contacts" v-html="$t('contacts')"></router-link></p>
                </div>

            </div>
            <div class="card footer-products">
                <p class="footer__title" v-html="$t('production')"></p>
                <p class="footer__text"><a href="#" v-html="$t('yarn32')"></a></p>
                <p class="footer__text"><a href="#" v-html="$t('yarn30')"></a></p>
                <p class="footer__text"><a href="#" v-html="$t('yarnNe')"></a></p>
            </div>
            <p class="footer__text mobile-only footer-address"><a href="https://www.google.com/maps/place/41%C2%B016'55.2%22N+69%C2%B011'54.6%22E/@41.2823104,69.1984986,17.39z/data=!4m4!3m3!8m2!3d41.281989!4d69.198485?entry=ttu" v-html="$t('address')"></a></p>

            <div class="card footer-contact">
                <p class="footer__title" v-html="$t('contacts')"></p>
                <p class="footer__text"><a href="tel:+998 95 198 10 10">+998 95 198 10 10</a></p>
                <p class="footer__text"><a href="tel:+998 90 167 58 46">+998 90 167 58 46</a></p>
                <p class="footer__text"><a href="tel:+998 99 073 00 00">+998 99 073 00 00</a></p>
                <p class="footer__text desktop-only"><a href="https://www.google.com/maps/place/41%C2%B016'55.2%22N+69%C2%B011'54.6%22E/@41.2823104,69.1984986,17.39z/data=!4m4!3m3!8m2!3d41.281989!4d69.198485?entry=ttu" v-html="$t('address')"></a></p>
            </div>
        </div>
    </div>
</footer>
</template>