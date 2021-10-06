<template>
  <nav class="navbar">
    <QiskitBasicLink :url="homeLink.url">
      <QiskitLogo class="navbar__logo" />
    </QiskitBasicLink>

    <button class="navbar__toggler" type="button" @click="toggleCollapsedMenu">
      <QiskitIconClose v-if="showCollapsedMenu" class="navbar__toggler__icon" />
      <QiskitIconMenu v-else class="navbar__toggler__icon" />
    </button>

    <div class="navbar__collapse" :class="{ show: showCollapsedMenu }">
      <ul class="navbar__nav">
        <li
          v-for="{ label, subItems, url } in navItems"
          :key="label"
          class="navbar__nav-item"
        >
          <QiskitBasicLink
            v-if="!subItems"
            class="navbar__nav-link"
            :url="url"
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
            <QiskitBasicLink
              v-for="{ label: subItemLabel, url: subItemUrl } in subItems"
              :key="subItemLabel"
              class="navbar__nav-subitem"
              :url="subItemUrl"
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
            </QiskitBasicLink>
          </bx-dropdown>
        </li>
      </ul>

      <footer class="navbar__footer">
        <div class="navbar__footer__social-links">
          <h4 class="navbar__footer__social-links__title">Stay Connected</h4>
          <div class="navbar__footer__social-links__icons">
            <a
              v-for="{ icon, label, url } in socialMediaLinks"
              :key="label"
              class="navbar__footer__social-links__icons__icon"
              :href="url"
              rel="noopener"
              target="_blank"
              :title="label"
            >
              <component :is="icon" />
            </a>
          </div>
        </div>
        <div class="navbar__footer__notice">© Qiskit | All Rights Reserved</div>
      </footer>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { QiskitBasicLink } from "../basic-link";
import {
  QiskitIconClose,
  QiskitIconMedium,
  QiskitIconMenu,
  QiskitIconSlack,
  QiskitIconTwitter,
  QiskitIconYoutube,
} from "../icons";
import { QiskitLogo } from "../logo";
import { NAME_NAVBAR } from "../../constants/components";

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

  components: {
    QiskitBasicLink,
    QiskitIconClose,
    QiskitIconMedium,
    QiskitIconMenu,
    QiskitIconSlack,
    QiskitIconTwitter,
    QiskitIconYoutube,
    QiskitLogo,
  },

  data: () => ({
    homeLink: {
      url: "/",
      segment: {
        cta: "home",
        location: "menu",
      },
    } as NavLink,

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

    socialMediaLinks: [
      {
        icon: QiskitIconTwitter,
        label: "Twitter",
        url: "https://twitter.com/Qiskit",
      },
      {
        icon: QiskitIconSlack,
        label: "Slack",
        url: "https://ibm.co/joinqiskitslack",
      },
      {
        icon: QiskitIconYoutube,
        label: "YouTube",
        url: "https://www.youtube.com/Qiskit",
      },
      {
        icon: QiskitIconMedium,
        label: "Medium",
        url: "https://medium.com/Qiskit",
      },
    ],
  }),

  methods: {
    onDropdownBeingSelected(dropdownRef: string) {
      this.closeDropdown(dropdownRef);
    },

    closeDropdown(dropdownRef: string) {
      interface DropdownElement {
        open: boolean;
      }

      const dropdownElement = this.$refs[
        dropdownRef
      ] as unknown as DropdownElement;
      dropdownElement.open = false;
    },

    toggleCollapsedMenu() {
      this.showCollapsedMenu = !this.showCollapsedMenu;

      const body = document.querySelector("body");

      if (body) {
        if (this.showCollapsedMenu) {
          body.classList.add("no-scroll-until-lg");
          body.scrollIntoView(true);
        } else {
          body.classList.remove("no-scroll-until-lg");
        }
      }
    },
  },
});
</script>

<style lang="scss">
@import "@carbon/layout/scss/layout";

body {
  &.no-scroll-until-lg {
    @include carbon--breakpoint-down("lg") {
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";
@import "@carbon/layout/scss/layout";
@import "@carbon/type/scss/type";

$nav-dropdown-item--background: $cool-gray-10;
$nav-item--border: 1px solid $cool-gray-20;
$nav-item--color: $cool-gray-80;
$nav-item--height: 3.5rem;
$nav-item--spacing-x: $spacing-06;

.navbar {
  @include carbon--type-style("body-long-02");

  align-items: center;
  border-bottom: $nav-item--border;
  display: flex;
  font-family: carbon--font-family("sans");
  min-height: $nav-item--height;
  justify-content: space-between;
  width: 100%;

  @include carbon--breakpoint-down("lg") {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: $nav-item--height 1fr;
    grid-template-areas: "logo toggler" "nav nav";

    @include carbon--breakpoint-up("md") {
      height: $nav-item--height;
    }
  }

  &__collapse {
    @include carbon--breakpoint-down("lg") {
      grid-area: nav;

      &:not(.show) {
        display: none;
      }
    }

    @include carbon--breakpoint-down("md") {
      display: grid;
      grid-template-rows: 1fr auto;
    }

    &.show {
      @include carbon--breakpoint-down("lg") {
        background-color: $white-0;
        border-top: 1px solid $white-0;
        box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
        height: calc(100vh - #{$nav-item--height});
        margin-left: auto;
        margin-top: -1px;
        width: 12rem;
        z-index: 1000;
      }

      @include carbon--breakpoint-down("md") {
        border-top: none;
        box-shadow: none;
        margin-left: initial;
        margin-top: initial;
        width: 100%;
      }
    }
  }

  &__footer {
    color: $cool-gray-60;
    display: block;
    margin-bottom: $spacing-08;
    padding: 0;

    @include carbon--breakpoint-up("md") {
      display: none;
    }

    &__notice {
      @include carbon--type-style("caption-01");

      background: $cool-gray-10;
      padding: $spacing-05 $nav-item--spacing-x;
    }

    &__social-links {
      padding: $spacing-05 $nav-item--spacing-x;

      &__icons {
        display: grid;
        gap: $spacing-03 $spacing-05;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: start;

        &__icon {
          color: $cool-gray-60;
        }
      }

      &__title {
        @include carbon--type-style("expressive-heading-01");
      }
    }
  }

  &__logo {
    $filter--cool-gray-60: invert(45%) sepia(16%) saturate(225%)
      hue-rotate(169deg) brightness(91%) contrast(85%);
    $filter--purple-70: invert(19%) sepia(79%) saturate(6925%)
      hue-rotate(265deg) brightness(81%) contrast(87%);

    display: flex;
    filter: $filter--cool-gray-60;
    height: 1.5rem;
    margin-left: $nav-item--spacing-x;

    &_active {
      filter: $filter--purple-70;
    }
  }

  &__nav {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding-left: 0;

    @include carbon--breakpoint-down("lg") {
      flex-direction: column;
    }
  }

  &__nav-dropdown {
    height: $nav-item--height;

    @include carbon--breakpoint-down("lg") {
      width: 100%;
    }

    &:hover {
      @include carbon--breakpoint-up("lg") {
        text-decoration: underline;
      }
    }

    &::part(menu-body) {
      top: calc(100% + 1rem);

      @include carbon--breakpoint-down("lg") {
        box-shadow: none;
        max-height: initial;
        position: relative;
        top: 0;
      }
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
      @include carbon--breakpoint-down("lg") {
        height: $nav-item--height * 3;
      }

      &::part(trigger-button) {
        background-color: $nav-dropdown-item--background;

        @include carbon--breakpoint-down("lg") {
          border-bottom: $nav-item--border;
          margin-bottom: -1px;
        }
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

    @include carbon--breakpoint-down("lg") {
      border-bottom: $nav-item--border;
      min-height: $nav-item--height;
    }
  }

  &__nav-link {
    align-items: center;
    color: $nav-item--color;
    display: flex;
    height: $nav-item--height;
    padding: 0 $nav-item--spacing-x;
    text-decoration: none;

    @include carbon--breakpoint-down("lg") {
      width: 100%;
    }

    &:hover {
      @include carbon--breakpoint-up("lg") {
        text-decoration: underline;
      }
    }
  }

  &__nav-subitem {
    align-items: center;
    background-color: $nav-dropdown-item--background;
    border-bottom: $nav-item--border;
    color: $nav-item--color;
    display: flex;
    height: $nav-item--height;
    padding: 0 $spacing-03;
    text-decoration: none;
    width: 100%;

    &:last-child {
      @include carbon--breakpoint-up("lg") {
        border: 0;
      }
    }

    &:hover {
      background-color: $cool-gray-20;

      @include carbon--breakpoint-up("lg") {
        text-decoration: underline;
      }
    }
  }

  &__toggler {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: $nav-item--spacing-x;

    @include carbon--breakpoint-up("lg") {
      display: none;
    }

    &__icon {
      fill: $nav-item--color;
      height: 1.25rem;
    }
  }
}
</style>
