<script lang="ts">
import Vue from "vue";
import { qiskitUiComponentsSample } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    qiskitUiComponentsSample,
  },
});
</script>

<template>
  <div id="app">
    <qiskit-ui-components-sample />
  </div>
</template>
