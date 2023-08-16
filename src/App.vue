<template>
  <AppConcept />
  <main class="content app__content">
    <AppPromo />
    <AppUniqueness />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppConcept from '@/components/Concept.vue';
import AppPromo from '@/components/Promo.vue';
import AppUniqueness from '@/components/Uniqueness.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppConcept,
    AppPromo,
    AppUniqueness
  },
  setup() {
    return {};
  },
});
</script>