

<template>
    <Navbar />
    <div class=" section padding_normal">

        <div class="all-products__item wrap-reverse">
                    <div class="all-products__item-image">
                        <img :src="data.image" alt="">
                    </div>
                    <div class="all-products__item-content">
                        <h3 class="card__title" v-html="data.title">
                        </h3>
                        <p class="section__text" v-html="data.description">
                    </p>
                </div>
        </div>

    </div>
    <Footer />
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
import { cardsData } from "../store";
export default {
    components: {
        Navbar,
        Footer,
    },
    props: ['id'],
    data() {
        return {
            data: cardsData.find(c => c.id == this.id),
        }
    },
    created() {
    }
}
</script>