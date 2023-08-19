<template>
  <section class="uniqueness">
    <h2 class="title uniqueness__title">
      Уникальные особенности модели
    </h2>

    <div class="features uniqueness__features">
      <div
          v-for="feature in featuresByFigaro"
          :key="feature.model_name"
          class="feature features__feature">
        <img class="img feature__picture" :src="feature.image" :alt="feature.image_alt">
        <p class="text feature__text">
          {{ feature.description }}
        </p>
      </div>
    </div>

    <button @click="addFeature" class="btn uniqueness__btn">Добавить особенность</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useMainStore } from '@/store/index';
export default defineComponent({
  name: 'AppUniqueness',
  setup() {
    const store = useMainStore();

    store.getUniqueFeaturesModel();

    const addFeature = () => {
      store.addFeature();
    };

    return {
      featuresByFigaro: computed(() => store.getUniqueFeaturesByFigaro),
      addFeature
    };
  }
});
</script>