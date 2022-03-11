<template>
  <v-card
    width="300px"
    :elevation="largeDevice?'0':'8'"
  >
    <div>
      <v-img src="/images/post/recent.png" />
    </div>
    <div class="pa-2">
      <p class="caption font-weight-light">
        Hocks,perona growth,How-to
      </p>
      <p class="title font-weight-medium">
        How to memorize everything superfast to maximize your productivity?
      </p>
      <p class="body-2">
        Many people are unfamiliar with the fact that the history of female entrepreneurship reaches far back into the past.
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
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
