<template>
  <section class="uniqueness">
    <h2 class="title uniqueness__title">
      Уникальные особенности модели
    </h2>

    <div class="features uniqueness__features">
      <div class="feature features__feature">
        <img class="img feature__picture" src="@/assets/images/features/torpedo.jpg" alt="torpedo">
        <p class="text feature__text">
          Идеально скомпанованная торпеда, удобна в использовнии как для правшей так и для левшей
        </p>
      </div>
      <div class="feature features__feature">
        <img class="img feature__picture" src="@/assets/images/features/salon.jpg" alt="salon">
        <p class="text feature__text">
          Белоснежные кресла и аксессуары салона выгодно подчеркнут ваш свежий средиземноморский загар
        </p>
      </div>
      <div class="feature features__feature">
        <img class="img feature__picture" src="@/assets/images/features/design.jpg" alt="design">
        <p class="text feature__text">
          Хардтоп отличительно элегантной  конструкции, автоматически складывается электроприводом
        </p>
      </div>
    </div>

    <button class="btn uniqueness__btn">Добавить особенность</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppUniqueness',
});
</script>