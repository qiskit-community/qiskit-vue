<template>
  <nav class="navbar">
    <img
      alt="Qiskit logo"
      class="navbar__logo"
      src="../../assets/img/logo.svg"
    />

    <button
      class="navbar__toggler"
      type="button"
      @click="showCollapsedMenu = !showCollapsedMenu"
    >
      Show menu: {{ showCollapsedMenu }}
    </button>

    <div class="navbar__collapse" :class="{ show: showCollapsedMenu }">
      <ul class="navbar__nav">
        <li
          v-for="{ label, subItems, url } in navItems"
          :key="label"
          class="navbar__nav-item"
        >
          <a
            v-if="!subItems"
            class="navbar__nav-link"
            :href="url"
            v-text="label"
          />

          <bx-dropdown
            v-else
            class="navbar__nav-dropdown"
            :trigger-content="label"
            :ref="`dropdown-${label}`"
            @bx-dropdown-beingselected.prevent="
              onDropdownBeingSelected(`dropdown-${label}`)
            "
          >
            <a
              v-for="{ label: subItemLabel, url: subItemUrl } in subItems"
              :key="subItemLabel"
              class="navbar__nav-subitem"
              :href="subItemUrl"
            >
              <bx-dropdown-item
                class="navbar__nav-dropdown-item"
                :value="label"
              >
                <span
                  class="navbar__nav-dropdown-item-text"
                  v-text="subItemLabel"
                />
              </bx-dropdown-item>
            </a>
          </bx-dropdown>
        </li>
      </ul>
    </div>
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
    showCollapsedMenu: false,
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

$nav-dropdown-item--background: $cool-gray-10;
$nav-item--color: $cool-gray-80;
$nav-item--height: 3.5rem;
$nav-item--spacing-x: $spacing-06;

.navbar {
  @include carbon--type-style("body-long-02");

  align-items: center;
  display: flex;
  font-family: carbon--font-family("sans");
  height: $nav-item--height;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: $nav-item--height 1fr;
    grid-template-areas: "logo toggler" "nav nav";
  }

  &__collapse {
    @media (max-width: 1050px) {
      grid-area: nav;

      &:not(.show) {
        display: none;
      }
    }
  }

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

    @media (max-width: 1050px) {
      flex-direction: column;
    }
  }

  &__nav-dropdown {
    @media (max-width: 1050px) {
      width: 100%;
    }

    &:hover {
      text-decoration: underline;
    }

    &::part(menu-body) {
      top: calc(100% + 1rem);
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

    &[open] {
      &::part(trigger-button) {
        background-color: $nav-dropdown-item--background;
      }
    }
  }

  &__nav-dropdown-item {
    background: transparent;
  }

  &__nav-dropdown-item-text {
    @include carbon--type-style("body-long-02");

    color: $nav-item--color;
    line-height: 0;
  }

  &__nav-item {
    display: flex;
    margin: 0;

    @media (max-width: 1050px) {
      border-bottom: 1px solid $cool-gray-20;
      height: $nav-item--height;
    }
  }

  &__nav-link {
    align-items: center;
    color: $nav-item--color;
    display: flex;
    height: $nav-item--height;
    padding: 0 $nav-item--spacing-x;

    @media (max-width: 1050px) {
      width: 100%;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__nav-subitem {
    align-items: center;
    background-color: $nav-dropdown-item--background;
    border-bottom: 1px solid $cool-gray-20;
    color: $nav-item--color;
    display: flex;
    height: $nav-item--height;
    padding: 0 $spacing-03;
    width: 100%;

    &:last-child {
      border: 0;
    }

    &:hover {
      background-color: $cool-gray-20;
      text-decoration: underline;
    }
  }

  &__toggler {
    @media (min-width: 1051px) {
      display: none;
    }
  }
}
</style>
