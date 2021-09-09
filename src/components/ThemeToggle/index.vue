<template>
  <div>Theme toggle</div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  computed: {
    isDarkSchemeOsPreferred: function (): boolean {
      const darkSchemeMediaQueryList: MediaQueryList = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      const hasDarkSchemeMediaQueryPreference: boolean =
        typeof darkSchemeMediaQueryList.matches === "boolean";

      if (hasDarkSchemeMediaQueryPreference) {
        return darkSchemeMediaQueryList.matches ? true : false;
      }

      return false;
    },

    persistedThemePreference: function (): string | undefined {
      const persistedPreference = window?.localStorage.getItem("qiskit-theme");
      const hasPersistedPreference = typeof persistedPreference === "string";

      if (hasPersistedPreference) {
        if (persistedPreference === "dark") {
          return "dark";
        } else if (persistedPreference === "light") {
          return "light";
        }
      }

      return undefined;
    },

    isDarkMode: function (): boolean {
      if (this.persistedThemePreference === "dark") {
        return true;
      } else if (this.persistedThemePreference === "light") {
        return false;
      }

      return this.isDarkSchemeOsPreferred;
    },
  },

  methods: {
    updateHtmlDarkClass: function (isDarkMode: boolean): void {
      const htmlElement = window?.document.querySelector("html");
      htmlElement?.classList.toggle("dark-theme", isDarkMode);
    },
  },

  watch: {
    isDarkMode: {
      handler: function (isDarkMode: boolean): void {
        this.updateHtmlDarkClass(isDarkMode);
      },
      immediate: true,
    },
  },
});
</script>
