import {toRefs, reactive} from 'vue';

export default function(fetchApi, payload) {
  const state = reactive({
    response: [],
    error: null,
    loading: false
  });
  const fetchData = async () => {
    state.loading = true;
    try {
      const res = await fetchApi(payload);
      state.response = res;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };
  return {...toRefs(state), fetchData};
}
