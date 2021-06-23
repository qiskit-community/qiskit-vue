<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
    @click="handleClick"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue-demi";
import { SegmentData } from "../../links";

export default defineComponent({
  props: {
    isStatic: {
      type: Boolean,
      default: false,
      required: false,
    },

    segment: {
      type: Object as PropType<SegmentData>,
      default: undefined,
      required: false,
    },

    url: {
      type: String,
      default: "",
      required: false,
    },
  },

  computed: {
    hasLink(): boolean {
      return !!this.url;
    },

    isAnchor(): boolean {
      return this.isExternal || this.isMail || this.isIdAnchor || this.isStatic;
    },

    isExternal(): boolean {
      return !!this.url && this.url.startsWith("http");
    },

    isIdAnchor(): boolean {
      return !!this.url && this.url.startsWith("#");
    },

    isMail(): boolean {
      return !!this.url && this.url.startsWith("mailto");
    },

    isNuxtLink(): boolean {
      return !this.isAnchor;
    },
  },

  methods: {
    handleClick() {
      this.$emit("click");

      // TODO:
      // this.segment && this.$trackClickEvent(this.segment);
    },
  },
});
</script>
