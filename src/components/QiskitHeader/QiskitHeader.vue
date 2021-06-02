<template>
  <div class="qiskit-header">Header component: {{ count }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue-demi";

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.qiskit-header {
  background-color: peru;
}
</style>
