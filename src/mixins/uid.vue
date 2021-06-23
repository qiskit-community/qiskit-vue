<script lang="ts">
import { defineComponent } from "vue-demi";

let uid = 0;

export default defineComponent({
  beforeCreate() {
    uid += 1;
  },

  data() {
    return {
      uid: uid,
    };
  },
});
</script>
