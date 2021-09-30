<template>
  <nav class="navbar">
    <img
      alt="Qiskit logo"
      class="navbar__logo"
      src="../../assets/img/logo.svg"
    />
    <ul class="navbar__nav">
      <li
        v-for="{ label, subItems, url } in navItems"
        :key="label"
        class="navbar__nav-item"
      >
        <a v-if="!subItems" class="navbar__nav-link" :href="url">{{ label }}</a>

        <bx-dropdown
          v-else
          class="navbar__nav-dropdown"
          :trigger-content="label"
          :ref="`dropdown-${label}`"
          @bx-dropdown-beingselected.prevent="
            onDropdownBeingSelected(`dropdown-${label}`)
          "
        >
          <bx-dropdown-item
            v-for="{ label: subItemLabel, url: subItemUrl } in subItems"
            :key="subItemLabel"
            :value="label"
          >
            <a :href="subItemUrl">{{ subItemLabel }}</a>
          </bx-dropdown-item>
        </bx-dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { NAME_NAVBAR } from "../../constants/components";
import "../../../node_modules/carbon-web-components/es/components/dropdown";

interface SegmentData {
  cta: string;
  location: string;
}

interface NavLink {
  label: string;
  url: string;
  segment: SegmentData;
}

interface DropdownNavItem {
  label: string;
  subItems: NavLink[];
}

export default defineComponent({
  name: NAME_NAVBAR,

  data: () => ({
    navItems: [
      {
        label: "Overview",
        url: "/overview",
        segment: {
          cta: "overview",
          location: "menu",
        },
      } as NavLink,
      {
        label: "Learn",
        url: "/learn",
        segment: {
          cta: "learn",
          location: "menu",
        },
      } as NavLink,
      {
        label: "Community",
        subItems: [
          {
            label: "Events",
            url: "/events",
            segment: {
              cta: "events",
              location: "menu",
            },
          },
          {
            label: "Advocates",
            url: "/advocates",
            segment: {
              cta: "advocates",
              location: "menu",
            },
          },
        ],
      } as DropdownNavItem,
      {
        label: "Documentation",
        url: "/documentation",
        segment: {
          cta: "documentation",
          location: "menu",
        },
      } as NavLink,
    ] as NavLink[] | DropdownNavItem[],
  }),

  methods: {
    onDropdownBeingSelected(dropdownRef: string) {
      this.closeDropdown(dropdownRef);
    },

    closeDropdown(dropdownRef: string) {
      interface DropdownElement {
        open: boolean;
      }

      const dropdownElement = this.$refs[dropdownRef] as DropdownElement;
      dropdownElement.open = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";
@import "@carbon/layout/scss/layout";
@import "@carbon/type/scss/type";

$nav-item--color: $cool-gray-80;
$nav-item--height: 3.5rem;
$nav-item--spacing-x: $spacing-06;

.navbar {
  @include carbon--type-style("body-long-02");

  align-items: center;
  display: flex;
  font-family: carbon--font-family("sans");
  justify-content: space-between;
  width: 100%;

  &__logo {
    $filter--cool-gray-80: invert(18%) sepia(16%) saturate(391%)
      hue-rotate(165deg) brightness(97%) contrast(87%);
    filter: $filter--cool-gray-80;
    height: 1.5rem;

    &_active {
      $filter--purple-70: invert(19%) sepia(79%) saturate(6925%)
        hue-rotate(265deg) brightness(81%) contrast(87%);
      filter: $filter--purple-70;
    }
  }

  &__nav {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  &__nav-dropdown {
    &:hover {
      text-decoration: underline;
    }

    &::part(trigger-button) {
      --cds-body-short-01-font-size: 1rem;
      --cds-body-short-01-letter-spacing: 0;
      --cds-body-short-01-line-height: 1.5;
      --cds-text-01: #{$nav-item--color};

      background-color: $white-0;
      height: $nav-item--height;
      padding-left: $nav-item--spacing-x;
    }
  }

  &__nav-item {
    display: flex;
    margin: 0;
  }

  &__nav-link {
    align-items: center;
    color: $nav-item--color;
    display: flex;
    height: $nav-item--height;
    padding: 0 $nav-item--spacing-x;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
