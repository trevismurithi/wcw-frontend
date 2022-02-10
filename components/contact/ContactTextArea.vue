<template>
  <div style="width:80%">
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
  }
}
</script>

<style>

</style>
