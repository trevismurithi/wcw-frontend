<template>
  <v-card class="d-flex flex-row justify-space-between my-6" style="background-color:#FF374F;" elevation="6">
    <div class="d-flex flex-row" style="width:30%">
      <div class="pa-4" style="width:130px">
        <v-img :src="'/images/directory/'+image" />
      </div>
      <div class="mx-2 d-flex flex-column justify-space-between">
        <p class="white--text title mt-7">
          {{ name }}
        </p>
        <p class="body-2 white--text">
          Industry: {{ industry }}
        </p>
      </div>
    </div>
    <div class="d-flex align-end mx-6">
      <p class="body-2 white--text">
        Country: {{ country }}
      </p>
    </div>
    <div class="d-flex align-end mx-6">
      <p class="body-2 white--text">
        Graduation Year: {{ year }}
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AppGraduate',
  props: {
    image: {
      type: String,
      default: 'graduate.svg'
    },
    name: {
      type: String,
      default: 'Leslie Alexander'
    },
    industry: {
      type: String,
      default: 'Beauty & Cosmetics'
    },
    country: {
      type: String,
      default: 'Nigeria'
    },
    year: {
      type: String,
      default: '2021'
    }
  }
}
</script>

<style>

</style>
