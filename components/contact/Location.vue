<template>
  <div class="d-flex flex-row my-4">
    <v-icon color="#FF374F">
      {{ icon }}
    </v-icon>
    <p class="my-0 mx-2 body-2 font-weight-medium">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppLocation',
  props: {
    icon: {
      type: String,
      default: 'mdi-plus'
    },
    content: {
      type: String,
      default: '121 Helen Joseph, 21 Avenue, Johannesburg, JHB 92103-9000'
    }
  }
}
</script>

<style>

</style>
