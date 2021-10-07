<template>
  <component
    :class="{'basic-link_has-link': hasLink }"
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="url"
    :to="isNuxtLink ? url : null"
    :rel="isExternal ? 'noopener' : null"
    :target="isExternal ? '_blank' : null"
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

    /**
     * Whether Vue.js is running in Nuxt.
     */
    isNuxt(): boolean {
      if (process) {
        interface ProcessEnhanced extends NodeJS.Process {
          client: boolean;
        }

        const processEnhanced: ProcessEnhanced = process as ProcessEnhanced;

        if (processEnhanced.client) {
          return true;
        }
      }

      return false;
    },

    isNuxtLink(): boolean {
      if (!this.isNuxt) {
        return false;
      }

      return !this.isAnchor;
    },
  },
});
</script>

<style lang="scss" scoped>
.basic-link {
  &._has-link {
    cursor: pointer;
  }
}
</style>
