<template>
  <div>
    <h2>Cat randomizer</h2>
    <button class="product-info__action" @click.prevent="randomize">Randomize</button>
  </div>
</template>

<script>
export default {
  name: 'CatTopBar',
  setup(props, context) {
    const randomize = () => {
      context.emit('send-randomize');
    };
    return {
      randomize,
    }
  }
};
</script>

<style scoped>
.product-info__action {
  margin-bottom: 10px;
}
</style>
