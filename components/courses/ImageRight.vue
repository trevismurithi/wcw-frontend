<template>
  <v-row class="my-14 mx-auto" :style="largeDevice?'width:70%':'width:100%'">
    <v-col :style="largeDevice?'width:50%':'width:100%'">
      <v-img src="/images/courses/grouped.svg" width="100%" />
    </v-col>
    <v-col class="d-flex flex-column justify-center">
      <p
        class="text-h4 font-weight-medium mx-6"
        :class="{
          'text-h5':largeDevice,
        }"
        style="color:#FF374F"
      >
        How Can I Apply?
      </p>
      <p class="mx-6 body-2">
        Application to the Ignite Course is mainly through partners sponsorship for now.
      </p>
      <p class="mx-6 body-2">
        We will announce opportunities when they come available please look out on Social Media,
        our Website, Newsletter and through your network for Calls for Applications.
      </p>
      <p class="mx-6 body-1 font-weight-bold my-1">
        Minimum Eligibility
      </p>
      <p class="mx-6 body-2 my-1">
        <span class="font-weight-bold">1.</span>Ambitous and hungry for growth
      </p>
      <p class="mx-6 body-2 my-1">
        <span class="font-weight-bold">2.</span>Must be in business for less than 12 months
      </p>
      <p class="mx-6 body-2 my-1">
        <span class="font-weight-bold">3.</span>Secondary school certification
      </p>
      <div class="mx-6 mt-4" style="width:fit-content">
        <p class="body-2 my-1" style="color:#FF374F;">
          Calls for Application
        </p>
        <div class="ma-0" style="background-color:#FF374F;width:100%;height:2px;" />
      </div>
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
