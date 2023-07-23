<template>
    <div class="contact-info">
        <div id="contact-modal" class="dialog modal">
            <div class="modal-container">
            <div class="modal__cancel width_30px">
                <RouterLink to="/">
                    <img class="width_100" src="../assets/img/cancel-outlined.svg">
                </RouterLink>

            </div>
            <form class="modal__form">
                <h3 class="modal__title" v-html="$t('contactUs')"></h3>
                <input v-model="name" id="name" type="text" name="name" :placeholder="$t('name')">
                <input v-model="number" id="phone" type="tel" name="phone" :placeholder="$t('number')">
                    <button @click="send" type="button" class="modal__form__button" v-html="$t('send')"></button>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
data(){
    return {
        name: '',
        number: '',
        chatId: '5898617027:AAFQtummprWOR58bP6Y2u5bZX5O0rOnu0h4',
        channelName: "-1001926430728"
    }
},
methods: {
    send(){
        if(this.name && this.number){
            axios.get(`https://api.telegram.org/bot${this.chatId}/sendMessage?chat_id=${this.channelName}&text=${"Имя: " + this.name + ' ' + "Номер телефона: " + this.number}`).then((res) => {
                this.name = '',
                this.number = ''
                this.$router.push('/')
                this.$toast.success("Успешно! <br /> Ваш запрос отправлен", {
                    position: "top-right",
                    })
                })
            }
        }
    }
}
</script>