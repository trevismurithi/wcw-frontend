<template>
  <v-row class="mx-auto rounded" :style="largeDevice?'width:60%':'width:100%'">
    <v-col class="pa-4">
      <p class="body-2">
        {{ firstLabel }}
      </p>
      <v-select
        :style="largeDevice?'width:auto':'width:300px'"
        :label="firstEntry"
        outlined
        :items="countries"
      />
    </v-col>
    <v-col class="pa-4">
      <p class="body-2">
        {{ secondLabel }}
      </p>
      <v-select
        :style="largeDevice?'width:auto':'width:300px'"
        :label="secondEntry"
        outlined
        :items="items"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    firstLabel: {
      type: String,
      default: 'Country'
    },
    secondLabel: {
      type: String,
      default: 'Sector'
    },
    firstEntry: {
      type: String,
      default: 'Select your country'
    },
    secondEntry: {
      type: String,
      default: 'Select your sector'
    },
    items: {
      type: Array,
      default: () => ['Health Care', 'Construction', 'Banking', 'Interior Design']
    },
    countries: {
      type: Array,
      default: () => ['Kenya', 'Uganda', 'Tanzania', 'Zanzibar', 'South Africa']
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
