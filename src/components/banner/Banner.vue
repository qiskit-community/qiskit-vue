<template>
  <div class="qiskit-banner" :class="{ 'padding-x-none': paddingXNone }">
    <div class="slot-wrapper"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { NAME_BANNER } from "../../constants/components";

export default defineComponent({
  name: NAME_BANNER,

  props: {
    paddingXNone: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";
@import "@carbon/layout/scss/layout";
@import "@carbon/type/scss/type";

.qiskit-banner {
  @include carbon--type-style("body-long-01");

  align-items: center;
  background: $carbon--purple-80;
  color: $white-0;
  display: flex;
  font-family: carbon--font-family("sans");
  padding: $spacing-04 $spacing-06;

  &.padding-x-none {
    padding-left: 0;
    padding-right: 0;
  }

  ::v-deep a,
  ::v-deep a:visited {
    color: $white-0;
    text-decoration: underline;
  }
}

.slot-wrapper {
  width: 100%;
}
</style>
