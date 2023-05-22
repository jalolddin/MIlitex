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
                <h3 class="modal__title">
                    Cвяжитесь с нами и начните сотрудничество сегодня
                </h3>
                <input id="name" type="text" name="name" placeholder="Ismingiz">
                <input id="phone" type="tel" name="phone" placeholder="Tel.qaramingiz">
                <RouterLink to="/">
                    <button type="button" class="modal__form__button">Yuborish</button>
                </RouterLink>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default{

}
</script>