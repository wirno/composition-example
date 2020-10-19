<template>
  <div class="product-info">

    <cat-top-bar @send-randomize="fetchCat" />
    <cat-image :data="data" :error="error" :loading="loading" />
  </div>
</template>

<script>
import {toRefs} from 'vue';
import useFetchCat from "../composition/use-fetch-cat";

import CatTopBar from './cat-top-bar.vue';
import CatImage from './cat-image.vue';

export default {
  name: 'CatInformation',
  async setup() {
    const { fetchCat, ...payload } = useFetchCat();
    return {
      fetchCat,
      ...toRefs(payload)
    };
  },
  components: { CatTopBar, CatImage },
};
</script>

<style scoped></style>
