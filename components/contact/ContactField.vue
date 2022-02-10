<template>
  <div style="width:80%">
    <p class="body-2 ml-1 font-weight-medium">
      {{ label }}
    </p>
    <v-text-field
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
      default: 'First Name'
    },
    entry: {
      type: String,
      default: 'Enter your first name'
    }
  }
}
</script>

<style>

</style>
