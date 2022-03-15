<template>
  <div :style="largeDevice?'width:80%;':'width:100%;'">
    <p class="body-2 ml-1 font-weight-medium">
      {{ label }}
    </p>
    <v-textarea
      outlined
      :label="entry"
      color="#FF374F"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Message'
    },
    entry: {
      type: String,
      default: 'Enter your message'
    }
  },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style>

</style>
