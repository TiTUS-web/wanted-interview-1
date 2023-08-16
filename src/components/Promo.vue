<template>
    <section class="promo">
      <hr class="line promo__line" />

      <h2 class="title promo__title">
        Мы ценим Ваше время и комфорт!
        Запишитесь на сервис Nissan онлайн
      </h2>

      <div class="advantages promo__advantages">
        <div class="advantage advantages__advantage">
          <img class="icon advantage__icon" src="@/assets/images/promo/benefit.svg" alt="benefit">
          <div class="text advantage__text">
            <h3 class="title text__title">выгода</h3>
            <p class="subtitle text__subtitle">
              Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля
            </p>
          </div>
        </div>
        <div class="advantage advantages__advantage">
          <img class="icon advantage__icon" src="@/assets/images/promo/relevance.svg" alt="relevance">
          <div class="text advantage__text">
            <h3 class="title text__title">актуальность</h3>
            <p class="subtitle text__subtitle">
              Выберите актуальные для вас сервисные предложения
            </p>
          </div>
        </div>
        <div class="advantage advantages__advantage">
          <img class="icon advantage__icon" src="@/assets/images/promo/wide-selection.svg" alt="selection">
          <div class="text advantage__text">
            <h3 class="title text__title">широкий выбор</h3>
            <p class="subtitle text__subtitle">
              Выберите дилера, который вам подходит
            </p>
          </div>
        </div>
        <div class="advantage advantages__advantage">
          <img class="icon advantage__icon" src="@/assets/images/promo/online-service.svg" alt="service">
          <div class="text advantage__text">
            <h3 class="title text__title">онлайн сервис</h3>
            <p class="subtitle text__subtitle">
              Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPromo',
});
</script>