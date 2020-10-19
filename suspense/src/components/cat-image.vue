<template>
  <div>
    <div v-if="loading">
      Data is loading ...
    </div>
    <div v-if="error">
      Error : {{ error }}
    </div>
    <div v-if="data && data.file">
      <img class="product-info__img" :src="data.file" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'CatImage',
  props: {
    error: String,
    data: Object,
    loading: Boolean,
  },
};
</script>

<style scoped>
.product-info__img {
  max-height: 300px;
}
</style>
