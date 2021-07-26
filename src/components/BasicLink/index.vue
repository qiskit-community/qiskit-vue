<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
    @click="
      $emit('click');
      segment && $trackClickEvent(segment.cta, segment.location);
    "
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { NAME_BASIC_LINK } from "../../constants/components";

export default defineComponent({
  name: NAME_BASIC_LINK,

  props: {
    isStatic: {
      type: Boolean,
      default: false,
      required: false,
    },

    segment: {
      type: Object,
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
});
</script>
