<template>
  <div>
    <input type="text" :value="modelValue" @input="onUpdate">
  </div>
</template>

<script lang="ts">
const setup = (props, { emit }) => {
  const onUpdate = (e) => {
    return emit('update:modelValue', e.target.value);
  };

  return { onUpdate };
};

export default {
  name: 'InputText',
  setup,
  props: { 
    'modelValue': String,
  },
}
</script>
