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

const sleep = m => new Promise(r => setTimeout(r, m))

export default {
  name: 'CatInformation',
  async setup() {
    const { fetchCat, ...payload } = useFetchCat();
    await fetchCat();
    await sleep(2000);

    return {
      fetchCat,
      ...toRefs(payload)
    };
  },
  components: { CatTopBar, CatImage },
};
</script>

<style scoped></style>
