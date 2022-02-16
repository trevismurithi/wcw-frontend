<template>
  <v-chip color="#FF374F" outlined>
    {{ name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Popular'
    }
  }
}
</script>

<style>

</style>
