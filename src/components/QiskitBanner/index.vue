<template>
  <div class="qiskit-banner"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";

.qiskit-banner {
  background: $carbon--purple-80;
  color: $white-0;
}
</style>
