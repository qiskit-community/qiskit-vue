# Qiskit Vue

Qiskit component library for Vue 2 and Vue 3.

https://qiskit-community.github.io/qiskit-vue/

## Installation

Install the required dependencies:

```
npm install @qiskit-community/qiskit-vue vue-demi
```

If your project uses Vue 2, also install the Composition API package:

```
npm install @vue/composition-api
```

## Usage in Vue 2 project

Example:

```
<template>
  <QLogo />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QLogo from '@qiskit-community/qiskit-vue/src/components/QLogo/index.vue'

@Component({
  components: { QLogo }
})
export default class MyComponent extends Vue {}
</script>
```

## Usage in Vue 3 project

Example:

```
<template>
  <QLogo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import QLogo from '@qiskit-community/qiskit-vue'

@Options({
  components: { QLogo }
})
export default class MyComponent extends Vue {}
</script>
```

## Development

### Project setup

```
npm install
```

#### Run Storybook

```
npm run dev
```

#### Run your unit tests

```
npm run test:unit
```

#### Lints and fixes files

```
npm run lint
```

### Conventions

We use [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) as our convention for commit messages.

## Versioning

We use [Semantic Release](https://github.com/semantic-release/semantic-release) for releasing new package versions and updating our CHANGELOG.
