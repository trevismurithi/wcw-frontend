<template>
  <v-card
    class="mb-2"
    :class="{
      'd-flex flex-row':largeDevice,
      '':smallDevice
    }"
    elevation="0"
  >
    <div :style="largeDevice?'width:35%':'width:100%'">
      <v-img :src="'/images/blog/'+image" />
    </div>
    <div class="pa-6 d-flex flex-column justify-space-between" style="width:90%">
      <div>
        <p class="title font-weight-medium">
          How women are shaping the future of business.
        </p>
        <p class="caption font-weight-medium">
          The business landscape is changing. COVID-19 pandemic aside,
          attitudes towards traditional ways of doing business are changing.
        </p>
      </div>
      <blog-share />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'blog-2.png'
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
