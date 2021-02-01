<template>
  <svg
    class="app-logo"
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 451.7 140.8"
    xml:space="preserve"
  >
    <defs>
      <radialGradient
        :id="scopeId('gradient-1')"
        cx="63.5"
        cy="71.1"
        r="65"
        gradientTransform="matrix(.96 .21 -.14 .63 43 13.8)"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="app-logo__gradient" offset=".2" stop-opacity="0" />
        <stop class="app-logo__gradient" offset="1" />
      </radialGradient>
      <radialGradient
        :id="scopeId('gradient-2')"
        cx="40"
        cy="162.1"
        r="35"
        gradientTransform="matrix(.98 0 0 .6 31.7 16.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="app-logo__gradient" offset="0" stop-opacity="0" />
        <stop class="app-logo__gradient" offset="1" />
      </radialGradient>
      <radialGradient
        :id="scopeId('gradient-3')"
        cx="40.5"
        cy="29.8"
        r="60.3"
        gradientTransform="matrix(.98 0 0 .75 31.6 9.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="app-logo__gradient" offset=".2" stop-opacity="0" />
        <stop class="app-logo__gradient" offset="1" />
      </radialGradient>
      <radialGradient
        :id="scopeId('gradient-4')"
        cx="3.1"
        cy="-.4"
        r="40.7"
        gradientTransform="matrix(.4 .89 -1.26 .57 33 -.4)"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="app-logo__gradient" offset=".4" stop-opacity="0" />
        <stop class="app-logo__gradient" offset="1" />
      </radialGradient>
      <radialGradient
        :id="scopeId('gradient-5')"
        cx="-412.4"
        cy="-1203.4"
        r="1068.9"
        gradientTransform="matrix(.98 0 0 .98 31.7 2.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop class="app-logo__gradient" offset="0" stop-opacity="0" />
        <stop class="app-logo__gradient" offset=".4" />
      </radialGradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

let _uidCounter = 0

function nextUniqueSuffix (): string {
  _uidCounter += 1
  return `_${_uidCounter}`
}

@Component
export default class AppLogo extends Vue {
  @Prop({ type: String, default: 'black' }) color!: string

  uniqueSuffix: string = nextUniqueSuffix()

  scopeId (str: string): string {
    return `${str}${this.uniqueSuffix}`
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  &__solid {
    fill: currentColor;
  }

  &__gradient {
    stop-color: currentColor;
  }
}
</style>
