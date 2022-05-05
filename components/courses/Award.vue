<template>
  <v-card
    :width="largeDevice?'30%':'100%'"
    class="rounded "
    :class="{
      'px-4':largeDevice,
      'px-2 my-1':smallDevice
    }"
    elevation="0"
  >
    <div class="d-flex px-2">
      <v-icon class="text-h4" style="color:#FF374F">
        mdi-check-circle
      </v-icon>
      <v-card-title class="body-2 font-weight-bold px-2 py-3">
        {{ content }}
      </v-card-title>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AppAward',
  props: {
    content: {
      type: String,
      default: 'How to improve yourself with small tasks'
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
