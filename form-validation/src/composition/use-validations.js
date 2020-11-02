import { ref, watch } from 'vue';

export default function(initialValue, validators) {
  const input = ref(initialValue);
  const isValid = ref(true);
  const errors = ref([]);

  const validate = (value = input.value) => {
    errors.value = validators.map(validator => validator(value)).filter(item => item);

    isValid.value = errors.value.length === 0;
  };

  watch(input, validate);
  validate();

  return { input, errors, isValid };
}
