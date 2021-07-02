<template>
  <div class="qiskit-banner"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.qiskit-banner {
  background: purple;
}
</style>
