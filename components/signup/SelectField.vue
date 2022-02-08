<template>
  <v-row class="mx-auto rounded" style="width:60%">
    <v-col class="pa-4">
      <p class="body-2">
        {{ firstLabel }}
      </p>
      <v-select
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
  }
}
</script>

<style>

</style>
