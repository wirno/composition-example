<template>
  <div class="form-validation">
    <h1>Form Validation</h1>
    <field-name />
  </div>
</template>

<script>
import FieldName from './field-name.vue';

export default {
  name: 'FormValidation',
  components: {
    FieldName,
  }
};
</script>

<style scoped></style>
