<template>
  <article class="app-mega-dropdown">
    <label
      ref="filterWrapper"
      class="app-mega-dropdown__filter-wrapper"
      :class="[`app-mega-dropdown__filter-wrapper_${kind}`, inputFieldClasses]"
    >
      <input
        v-model="textOnTheFilter"
        type="text"
        class="app-mega-dropdown__filter-wrapper__input"
        :placeholder="placeholder"
        @focus="onShowContent"
        @keyup="onTextOnTheFilterChanged"
      />
      <svg
        class="app-mega-dropdown__filter-wrapper__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" />
      </svg>
    </label>
    <div
      v-if="showContent"
      ref="dropdown"
      class="app-mega-dropdown__content-container"
    >
      <nav class="app-mega-dropdown__content">
        <div
          v-for="(column, columnIndex) in filteredContent"
          :key="columnIndex"
          class="app-mega-dropdown__content-column"
        >
          <div v-for="(group, groupIndex) in column" :key="`${groupIndex}`">
            <QiskitBasicLink
              class="
                app-mega-dropdown__content-link
                app-mega-dropdown__content-link_title
              "
              :url="group.title.url"
            >
              <span
                v-for="part in splitTextInHighlightParts(group.title.label)"
                :key="`${part.index}-${part.text.length}`"
                :class="{
                  'app-mega-dropdown__content-link__text-highlight':
                    part.isHighlighted,
                }"
                >{{ part.text }}</span
              >
            </QiskitBasicLink>
            <QiskitBasicLink
              v-for="chapter in group.content"
              :key="chapter.label"
              class="app-mega-dropdown__content-link"
              :url="chapter.url"
            >
              <span
                v-for="part in splitTextInHighlightParts(chapter.label)"
                :key="`${part.index}-${part.text.length}`"
                :class="{
                  'app-mega-dropdown__content-link__text-highlight':
                    part.isHighlighted,
                }"
                >{{ part.text }}</span
              >
            </QiskitBasicLink>
          </div>
        </div>
        <div
          v-if="isFilteredContentEmpty"
          class="app-mega-dropdown__content-empty"
        >
          <h2 class="app-mega-dropdown__content-empty__title">Nothing here</h2>
          <p class="app-mega-dropdown__content-empty__text">
            Try broadening your search terms
          </p>
          <img
            src="../../assets/img/empty-search.png"
            class="app-mega-dropdown__content-empty__image"
          />
        </div>
      </nav>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue-demi";
import QiskitBasicLink from "../BasicLink/index.vue";
import { NAME_MEGA_MENU_DROPDOWN } from "../../constants/components";

interface HighlightTextState {
  text: string;
  isHighlighted: boolean;
}

interface NavLink {
  label: string;
  url: string;
}

interface MegaMenuDropdownGroup {
  title: NavLink;
  content: NavLink[];
}

type MegaMenuDropdownColumn = MegaMenuDropdownGroup[];

type MegaMenuDropdownContent = MegaMenuDropdownColumn[];

export const PROP_OPTIONS_KIND = { PRIMARY: "primary", SECONDARY: "secondary" };

export default defineComponent({
  name: NAME_MEGA_MENU_DROPDOWN,

  components: { QiskitBasicLink },

  props: {
    content: {
      type: Array as PropType<MegaMenuDropdownContent>,
      required: true,
    },

    inputFieldClasses: {
      type: String,
      default: "",
      required: false,
    },

    kind: {
      type: String,
      default: PROP_OPTIONS_KIND.PRIMARY,
      required: false,
      validator(value: string) {
        return Object.values(PROP_OPTIONS_KIND).includes(value);
      },
    },

    placeholder: {
      type: String,
      default: "Browse all content",
      required: false,
    },

    segmentComponentName: {
      type: String,
      default: "",
      required: false,
    },

    trackPerformedSearch: {
      type: Function as PropType<(a: string, b: string) => void>,
      default: () => undefined,
      required: false,
    },
  },

  data: () => {
    return {
      searchTermTrackingTimeout: null as NodeJS.Timeout | null,

      showContent: false,

      textOnTheFilter: "",
    };
  },

  computed: {
    filteredContent(): MegaMenuDropdownContent {
      if (this.isFilterTextEmpty) {
        return this.content;
      }

      const wordsOnTheFilter: string[] = this.wordsOnTheFilter;

      const filteredContent = this.content.map(
        (column: MegaMenuDropdownColumn) =>
          this._filterMegaDropdownColumn(column, wordsOnTheFilter)
      );
      const nonEmptyColumnsFilteredContent = filteredContent.filter(
        (column: MegaMenuDropdownColumn) => column.length > 0
      );

      return nonEmptyColumnsFilteredContent;
    },

    isFilteredContentEmpty(): boolean {
      return this.filteredContent.length === 0;
    },

    isFilterTextEmpty(): boolean {
      return this.textOnTheFilter.trim() === "";
    },

    wordsOnTheFilter(): string[] {
      return this.textOnTheFilter
        .trim()
        .toLowerCase()
        .split(" ")
        .filter((word: string) => word !== "");
    },
  },

  methods: {
    removeSearchTermTrackingTimeout() {
      if (this.searchTermTrackingTimeout) {
        clearTimeout(this.searchTermTrackingTimeout);
        this.searchTermTrackingTimeout = null;
      }
    },

    splitTextInHighlightParts(menuLabel: string): HighlightTextState[] {
      const isTextEmpty = menuLabel.trim() === "";
      if (this.isFilterTextEmpty || isTextEmpty) {
        return [{ text: menuLabel, isHighlighted: false }];
      }

      const charIsHighlightArray = this._splitTextInHighlightedChars(
        menuLabel,
        this.wordsOnTheFilter
      );

      const textHighlightParts =
        this._joinCharsByHighlightedState(charIsHighlightArray);

      return textHighlightParts;
    },

    _trackPerformedSearch() {
      if (this.segmentComponentName && this.trackPerformedSearch) {
        this.trackPerformedSearch(
          this.segmentComponentName,
          this.textOnTheFilter
        );
      }
    },

    onTextOnTheFilterChanged() {
      this.removeSearchTermTrackingTimeout();

      this.searchTermTrackingTimeout = setTimeout(() => {
        this._trackPerformedSearch();
      }, 750);
    },

    onShowContent() {
      this.showContent = true;
    },

    _filterMegaDropdownColumn(
      column: MegaMenuDropdownColumn,
      wordsOnTheFilter: string[]
    ): MegaMenuDropdownColumn {
      const filteredColumn = column.map((group: MegaMenuDropdownGroup) =>
        this._filterMegaDropdownGroupLinks(group, wordsOnTheFilter)
      );
      const nonEmptyGroupsFilteredColumn = filteredColumn.filter(
        (group: MegaMenuDropdownGroup) => group.content.length > 0
      );

      return nonEmptyGroupsFilteredColumn;
    },

    _filterMegaDropdownGroupLinks(
      group: MegaMenuDropdownGroup,
      wordsOnTheFilter: string[]
    ): MegaMenuDropdownGroup {
      const titleSelected = this._containsWordsOnTheFilter(
        group.title.label,
        wordsOnTheFilter
      );
      if (titleSelected) {
        return group;
      }

      const filteredLinks = group.content.filter((link: NavLink) =>
        this._containsWordsOnTheFilter(link.label, wordsOnTheFilter)
      );

      return {
        title: group.title,
        content: filteredLinks,
      };
    },

    // Join consecutive characters with the same highlight property
    // The result is an array of texts flaged with the isHighlighted property
    // The n+1 text has always the opposit highlight state of n.
    _joinCharsByHighlightedState(
      highlightStateByChar: HighlightTextState[]
    ): HighlightTextState[] {
      const output = [
        {
          text: highlightStateByChar[0].text,
          isHighlighted: highlightStateByChar[0].isHighlighted,
          index: 0,
        },
      ];

      for (let i = 1; i < highlightStateByChar.length; i++) {
        const lastCharState = output[output.length - 1];
        const currentChar = highlightStateByChar[i];
        const highlightTextContinues =
          lastCharState.isHighlighted === currentChar.isHighlighted;

        if (highlightTextContinues) {
          lastCharState.text = lastCharState.text.concat(currentChar.text);
        } else {
          output.push({
            text: currentChar.text,
            isHighlighted: currentChar.isHighlighted,
            index: i,
          });
        }
      }

      return output;
    },

    // Splits the menuLabel in characters and sets "isHighlighted" property indicating if the character should be highlighted or not
    _splitTextInHighlightedChars(
      menuLabel: string,
      wordsOnTheFilter: string[]
    ): HighlightTextState[] {
      const charArray = Array.from(menuLabel);
      // Assign the isHighlighted flag to each character
      const highlightStates = charArray.map<HighlightTextState>(
        (letter: string) => ({ text: letter, isHighlighted: false })
      );
      const lowerCaseText = menuLabel.toLowerCase();

      wordsOnTheFilter.forEach((word: string) => {
        // start highlighting index
        let from = lowerCaseText.indexOf(word);

        while (from >= 0) {
          // end highlighting index
          const to = from + word.length;

          for (let i = from; i < to; i++) {
            highlightStates[i].isHighlighted = true;
          }
          // the text could have the same word multiple times.
          from = lowerCaseText.indexOf(word, Math.max(to, 1));
        }
      });

      return highlightStates;
    },

    _containsWordsOnTheFilter(label: string, wordsOnTheFilter: string[]) {
      return wordsOnTheFilter.some((word) =>
        label.toLowerCase().includes(word)
      );
    },

    handleClick(e: MouseEvent) {
      const buttonElement = this.$refs.filterWrapper as Element;
      const dropdownElement = this.$refs.dropdown as Element | undefined;

      if (dropdownElement) {
        const clickedOnDropdown = dropdownElement.contains(e.target as Node);
        const clickedOnButton = buttonElement.contains(e.target as Node);
        const shouldCloseDropdown = !clickedOnDropdown && !clickedOnButton;

        if (shouldCloseDropdown) {
          this.showContent = false;
          this.textOnTheFilter = "";
        }
      }
    },
  },

  mounted() {
    document.addEventListener("mousedown", this.handleClick);
  },

  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClick);

    this.removeSearchTermTrackingTimeout();
  },
});
</script>

<style lang="scss">
@import "@carbon/colors/scss/colors";
@import "@carbon/layout/scss/layout";
@import "@carbon/type/scss/type";

.app-mega-dropdown {
  @include carbon--type-style("body-short-01");

  color: var(--color-text-primary);
  font-family: carbon--font-family("sans");
  position: relative;

  &__filter-wrapper {
    display: flex;
    height: 2.5rem;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-03;
    color: var(--color-text-primary);
    fill: var(--color-text-primary);
    border-bottom: 1px solid var(--color-border-highlight);

    &__input {
      flex: 1;
      background-color: transparent;
      outline: none;
      border: none;
      color: inherit;

      &::placeholder {
        color: inherit;
      }
      &:focus::placeholder {
        opacity: 0.25;
      }
    }

    &__icon {
      flex: 0 0 1rem;
      cursor: pointer;

      & > path {
        transform: translate(0, 0);
        transition: transform 0.2s ease-in-out;
      }
    }

    &:hover &__icon > path {
      transform: translate(0, 4px);
      transition: transform 0.2s ease-in-out;
    }

    &_primary {
      background-color: transparent;
    }

    &_secondary {
      background-color: $white-0;
    }
  }

  &__content-container {
    position: absolute;
    top: 2.5rem;
    padding: $spacing-07 $spacing-05;
    width: 12 * 4rem;
    background-color: var(--color-background-primary);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    height: 32rem;
    overflow-y: scroll;
    overflow-x: auto;

    @media (max-width: 672px) {
      left: 0;
      right: 0;
      height: 80vh;
    }

    @media (max-width: 1056px) {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: $spacing-09;

    @media (max-width: 672px) {
      flex-direction: column;
    }

    &-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: $spacing-09;
    }

    &-link {
      display: block;
      padding-bottom: $spacing-05;
      color: var(--color-text-primary);
      text-decoration: none;

      &_title {
        font-weight: 600;
      }
      &__text-highlight {
        background-color: var(--color-text-highlight);
      }
    }
    &-empty {
      display: flex;
      flex-direction: column;
      text-align: center;
      flex: 1;
      align-items: center;

      &__text {
        @include carbon--type-style("body-short-01");
      }
      &__image {
        width: 16rem;
        max-width: 100%;
        height: 18rem;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
