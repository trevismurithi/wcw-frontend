<template>
  <div
    class="mx-auto"
    :class="{
      'd-flex flex-row justify-space-around align-center':largeDevice
    }"
    :style="largeDevice?'width:70%':'width:100%'"
  >
    <p class="font-weight-bold text-h5" style="color:#FF374F;">
      Filter:
    </p>
    <div
      class="my-6"
      :class="{
        'd-flex flex-row ':largeDevice
      }"
      :style="largeDevice?'width:80%':'width:100%'"
    >
      <v-select
        class="mx-2 my-5"
        :items="items"
        outlined
        label="Business Type:"
        color="#FF374F"
      />
      <v-select
        class="mx-2 my-5"
        :items="countries"
        outlined
        label="Country Name:"
        color="#FF374F"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  data: () => {
    return {
      items: ['Health Care', 'Construction', 'Banking', 'Interior Design'],
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Zanzibar', 'South Africa']
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
