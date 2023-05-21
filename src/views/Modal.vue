<template>
    <div class="contact-info">
        <div id="contact-modal" class="dialog modal">
            <div class="modal-container">
            <div class="modal__cancel width_30px">
                <img width="width_100" src="assets/img/cancel-outlined.svg" alt="">
            </div>
            <form class="modal__form">
                <h3 class="modal__title">
                    Cвяжитесь с нами и начните сотрудничество сегодня
                </h3>
                <input id="name" type="text" name="name" placeholder="Ismingiz">
                <input id="phone" type="tel" name="phone" placeholder="Tel.qaramingiz">
                <button type="button" onclick="closeModal()" class="modal__form__button">Yuborish</button>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default{

}
</script>