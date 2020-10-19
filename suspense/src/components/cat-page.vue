<template>
  <div class="product-page">
    <Suspense>
      <template #default>
        <cat-information />
      </template>
      <template #fallback>
        <div>Loading ...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import {ref, onErrorCaptured} from 'vue';

import CatInformation from './cat-information.vue';

export default {
  name: 'CatPage',
  setup() {
    const error = ref(null);
    onErrorCaptured(e => {
      console.log(e);
      error.value = e;
    });
    return { error };
  },
  components: { CatInformation },
};
</script>

<style scoped></style>
