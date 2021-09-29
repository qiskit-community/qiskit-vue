<template>
  <nav class="navbar">
    <img
      alt="Qiskit logo"
      class="navbar__logo"
      src="../../assets/img/logo.svg"
    />
    <ul class="navbar__nav">
      <li class="navbar__nav-item">
        <a class="navbar__nav-link" href="#">Overview</a>
      </li>
      <li class="navbar__nav-item">
        <a class="navbar__nav-link" href="#">Learn</a>
      </li>
      <li class="navbar__nav-item">
        <a class="navbar__nav-link" href="#">Community</a>
      </li>
      <li class="navbar__nav-item">
        <a class="navbar__nav-link" href="#">Documentation</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { NAME_NAVBAR } from "../../constants/components";

export default defineComponent({
  name: NAME_NAVBAR,
});
</script>

<style lang="scss" scoped>
@import "@carbon/colors/scss/colors";
@import "@carbon/layout/scss/layout";
@import "@carbon/type/scss/type";

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

  &__nav-item {
    margin: 0;
  }

  &__nav-link {
    color: $cool-gray-80;
    padding: $spacing-05 $spacing-06;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
