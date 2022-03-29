<template>
  <v-stepper-content :step="step">
    <slot>
      nothing
    </slot>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style>

</style>
