<template>
  <div>
    <div>
      field name
      <input-text type="text" v-model="input" />
    </div>
    <div>{{errors.length ? errors : ''}}</div>
    <div>isValid : {{isValid}}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import isFilled from '../composition/is-filled';
import isLength from '../composition/length';
import useValidations from '../composition/use-validations';
import InputText from './input-text.component';

export default {
  name: 'FieldName',
  setup() {
  const initialValue = ref('');
  const validators = [isFilled(), isLength()];

  const { input, errors, isValid } = useValidations(initialValue, validators);

  return { input, errors, isValid };
  },
  components: {
    InputText,
  }
};
</script>

<style scoped></style>
