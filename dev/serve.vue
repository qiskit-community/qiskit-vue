<script lang="ts">
import Vue from "vue";
import { UIShellHeader } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    UIShellHeader,
  },
});
</script>

<template>
  <div id="app">
    <UIShellHeader />
  </div>
</template>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
