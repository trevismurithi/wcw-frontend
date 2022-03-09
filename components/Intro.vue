<template>
  <div>
    <v-card-text
      class="text-center mx-auto font-weight-bold"
      :class="{
        'text-h3':largeDevice,
        'text-h5':smallDevice
      }"
      :style="largeDevice?'width:40%; color:#FF374F;':'width:100%; color:#FF374F;'"
    >
      WCW Business Community
    </v-card-text>
    <v-card-text class="text-center mx-auto" :style="largeDevice?'width:40%;':'width:100%;'">
      WCW Alumni are encouraged to participate in the business community
      and leverage our collective voice, social capital and partnership
      to address the complex issues of reducing barriers for women entrepreneurs.
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'AppIntro',
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
