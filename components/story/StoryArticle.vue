<template>
  <v-carousel
    v-model="model"
    dark
    hide-delimiters
    class="my-10 mx-auto"
    :style="largeDevice?'width:70%;':'width:100%;'"
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
  >
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="i"
    >
      <v-sheet
        :color="color"
        tile
        class="d-flex justify-center"
      >
        <v-card
          width="90%"
          :class="{
            'ma-4 pa-10':largeDevice
          }"
          elevation="10"
        >
          <div
            :class="{
              'd-flex flex-row':largeDevice,
            }"
          >
            <div :style="largeDevice?'width:40%':'width:100%'">
              <div :style="largeDevice?'width:80%':'width:100%'">
                <v-img src="/images/story/writer.png" />
              </div>
            </div>
            <div>
              <div class="px-2">
                <p class="caption font-weight-bold" style="color:#FF374F">
                  Founder at XYZ
                </p>
                <p class="body-1 font-weight-bold">
                  Adama Markol
                </p>
                <p class="body-2">
                  The business landscape is changing. COVID-19 pandemic aside, attitudes towards
                  traditional ways of doing business are changing. What`s more, there`s
                  evidence to suggest that women are playing a large role in shaping this
                  future of business. We take a look at the history that has created the
                  current landscape, and what we can expect to see in the future.
                  As well as exploring some of the data and evidence around the subject,
                  we`ve also spoken with some of our partners to get their expert insight on the matter.
                </p>
              </div>
            </div>
          </div>
        </v-card>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      'white',
      'white',
      'white',
      'white',
      'white'
    ]
  }),
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
