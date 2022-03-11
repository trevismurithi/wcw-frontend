<template>
  <v-card
    class=" my-10 mx-auto"
    :class="{
      'd-flex flex-row justify-space-between align-center':largeDevice,
      '':smallDevice
    }"
    color="#FF374F"
    width="80%"
    elevation="10"
  >
    <div
      class=""
      :class="{
        'd-flex flex-row':largeDevice,
      }"
    >
      <div class="pa-6">
        <v-img src="/images/courses/book.svg" width="70%" />
      </div>
      <div
        class="d-flex flex-column justify-center"
        :class="{
          'pa-4':smallDevice
        }"
      >
        <p class="text-h6 white--text font-weight-medium">
          Download our Free 2021/2022 eBook
        </p>
        <p
          class="body-2 white--text"
          style="width:85%"
        >
          Our second group of WCW alumni have contributed personal stories of their determination, zeal, hardships, and achievements.
        </p>
      </div>
    </div>
    <v-btn
      class="mx-6 white--text poppins-font"
      :class="{
        'my-4':smallDevice
      }"
      color="#FFCC18"
    >
      {{ largeDevice? 'Download FREE eBook':'Download' }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'AppEbook',
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
