<template>
    <div class="section section3">
        <div class="padding_normal bg_blue_dark pad_ver_5">
            <div class="section3__content">
                <h2 v-html="$t('contactUs')"></h2>
                <p v-html="$t('contactDesc')"></p>
                <router-link to="/modal" class="button">
                  <p v-html="$t('connect')"></p>
                    <img src="../assets/img/arrow-right.svg" alt="">
                </router-link>
            </div>
        </div>  
    </div>
</template>