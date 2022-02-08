<template>
  <div class="mx-auto d-flex flex-row justify-space-around align-center" style="width:70%">
    <p class="font-weight-bold text-h5" style="color:#FF374F;">
      Filter:
    </p>
    <div class="d-flex flex-row my-6" style="width:80%">
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
  }
}
</script>

<style>

</style>
