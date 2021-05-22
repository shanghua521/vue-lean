import { ref, Ref } from "vue";
import axios from "axios";

type resultType = {
  result: Ref<null>;
  loading: Ref<boolean>;
  loaded: Ref<boolean>;
  error: Ref<null>;
};

function urlUrlAxios(url: string): resultType {
  const result = ref(null);
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);
  axios
    .get(url)
    .then((res) => {
      loading.value = false;
      loaded.value = true;
      result.value = res.data;
    })
    .catch((e) => {
      error.value = e;
      loading.value = false;
    });
  return { result, loading, loaded, error };
}

export default urlUrlAxios;
