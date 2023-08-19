<template>
    <section class="promo">
      <hr class="line promo__line" />

      <h2 class="title promo__title">
        Мы ценим Ваше время и комфорт!
        Запишитесь на сервис Nissan онлайн
      </h2>

      <div class="advantages promo__advantages">
        <template v-if="sliderMode">
          <Carousel :mouseDrag="false" :touchDrag="false">
            <slide
                v-for="advantage in advantages"
                :key="advantage.title"
                class="advantage advantages__advantage"
            >
              <img class="icon advantage__icon" :src="advantage.image" alt="benefit">
              <div class="text advantage__text">
                <h3 class="title text__title">{{ advantage.title }}</h3>
                <p class="subtitle text__subtitle">
                  {{ advantage.subtitle }}
                </p>
              </div>
            </slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </template>
        <template v-else>
          <div
              v-for="advantage in advantages"
              :key="advantage.title"
              class="advantage advantages__advantage"
          >
            <img class="icon advantage__icon" :src="advantage.image" alt="benefit">
            <div class="text advantage__text">
              <h3 class="title text__title">{{ advantage.title }}</h3>
              <p class="subtitle text__subtitle">
                {{ advantage.subtitle }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </section>
</template>

<script lang="ts">
import benefit from '@/assets/icons/benefit.svg';
import relevance from '@/assets/icons/relevance.svg';
import wideSelection from '@/assets/icons/wide-selection.svg';
import onlineService from '@/assets/icons/online-service.svg';

import {defineComponent, ref, Ref} from 'vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { TAdvantage } from '@/types/promo.types';
export default defineComponent({
  name: 'AppPromo',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  setup() {
    let windowWidth: Ref<number | null> = ref(null);
    let sliderMode: Ref<boolean | null> = ref(false);

    window.addEventListener('resize', checkScreen);
    checkScreen();

    function checkScreen(): void {
      windowWidth.value = window.innerWidth;

      if (windowWidth.value <= 769) {
        sliderMode.value = true;
        return;
      }

      sliderMode.value = false;
      return;
    }

    const advantages: TAdvantage[] = [
      {
        image: benefit,
        title: 'Выгода',
        subtitle: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля',
      },
      {
        image: relevance,
        title: 'Актуальность',
        subtitle: 'Выберите актуальные для вас сервисные предложения',
      },
      {
        image: wideSelection,
        title: 'Широкий выбор',
        subtitle: 'Выберите дилера, который вам подходит',
      },
      {
        image: onlineService,
        title: 'Онлайн сервис',
        subtitle: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты',
      },
    ];

    return {
      advantages,
      sliderMode,
    };
  }
});
</script>