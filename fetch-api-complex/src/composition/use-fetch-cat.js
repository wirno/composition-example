import {toRefs, reactive} from 'vue';
import useFetch from './use-fetch';

import {CatService} from '../services/cat.service';

export default function() {
  let cat = reactive({data: {}, error: null, loading: false});
  const fetchCat = async () => {
    const catClient = new CatService();
    const {response, error, fetchData, loading} = useFetch(catClient.getCat);
    fetchData();
    cat.data = response;
    cat.error = error;
    cat.loading = loading;
  };
  return {fetchCat, ...toRefs(cat)};
}
