<template>
  <v-row class="mb-14">
    <v-col>
      <v-img
        :class="{
          'mx-4':largeDevice,
          'mx-auto':smallDevice
        }"
        src="/images/mastercard.svg"
        width="60%"
      />
    </v-col>
    <v-col>
      <v-img
        :class="{
          'mx-4':largeDevice,
          'mx-auto':smallDevice
        }"
        src="/images/ecobank.svg"
        width="60%"
      />
    </v-col>
    <v-col>
      <v-img
        :class="{
          'mx-4':largeDevice,
          'mx-auto':smallDevice
        }"
        src="/images/unite.svg"
        width="60%"
      />
    </v-col>
    <v-col>
      <v-img
        :class="{
          'mx-4':largeDevice,
          'mx-auto':smallDevice
        }"
        src="/images/graca.svg"
        width="60%"
      />
    </v-col>
  </v-row>
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
