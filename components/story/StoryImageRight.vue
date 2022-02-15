<template>
  <v-row class="my-14 mx-auto" style="width:70%">
    <v-col class="d-flex flex-column justify-center">
      <p class="text-h4 font-weight-bold mx-8" style="color:#FF374F">
        {{ title }}
      </p>
      <p class="mx-8 caption">
        {{ body }}
      </p>
    </v-col>
    <v-col style="width:50%">
      <v-img :src="'/images/story/'+image" width="100%" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'stage-2.png'
    },
    title: {
      type: String,
      default: 'ACCESS TO MARKET OPPORTUNITIES'
    },
    body: {
      type: String,
      default: 'Access to market is facilitated through a business directory, highlighting deal opportinities & industry engagements.'
    }
  }
}
</script>

<style>

</style>
