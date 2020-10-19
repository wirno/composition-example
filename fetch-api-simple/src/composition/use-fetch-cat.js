import { toRefs, reactive } from 'vue';

import { CatService } from '../services/cat.service';

export default function() {
  const state = reactive({
    data: {},
    error: null,
    loading: false
  });

  const fetchCat = async () => {
    state.loading = true;
    try {
      const catClient = new CatService();
      const response = await catClient.getCat();
      state.data = response;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };
  return {fetchCat, ...toRefs(state)};
}
