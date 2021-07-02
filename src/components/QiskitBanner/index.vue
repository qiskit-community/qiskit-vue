<template>
  <div class="qiskit-banner"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";
@import "@carbon/type/scss/type";

.qiskit-banner {
  @include carbon--type-style("body-long-01");

  background: $carbon--purple-80;
  color: $white-0;
  font-family: carbon--font-family("sans");
}
</style>
