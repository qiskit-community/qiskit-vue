<template>
  <div class="qiskit-header">Header component</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class QiskitHeader extends Vue {}
</script>

<style lang="scss" scoped>
.qiskit-header {
  background-color: peru;
}
</style>
