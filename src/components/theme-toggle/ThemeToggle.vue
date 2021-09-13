<script lang="ts">
import { defineComponent } from "vue-demi";
import useDarkMode from "../../composables/useDarkMode";
import { NAME_THEME_TOGGLE } from "../../constants/components";

export default defineComponent({
  name: NAME_THEME_TOGGLE,

  computed: {
    isDarkMode(): boolean {
      return useDarkMode();
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
