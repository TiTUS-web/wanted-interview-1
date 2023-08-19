<template>
  <AppBanner />
  <main class="content app__content">
    <AppPromo />
    <AppUniqueness />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBanner from '@/components/Banner.vue';
import AppPromo from '@/components/Promo.vue';
import AppUniqueness from '@/components/Uniqueness.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppBanner,
    AppPromo,
    AppUniqueness
  },
  setup() {
    return {};
  },
});
</script>