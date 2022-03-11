<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card class="mx-auto rounded-lg my-6" :width="largeDevice?'350px':'300px'">
        <v-img :src="'/images/blog/' + image" />
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="black"
            class="d-flex align-end"
          >
            <div class="rounded-lg pa-4 ma-4" style="background-color:#FF374F;">
              <p class="title">
                How women are shaping the future of business.
              </p>
              <p class="caption font-weight-medium">
                The business landscape is changing. COVID-19 pandemic aside,
                attitudes towards traditional ways of doing business are changing.
              </p>
              <div style="width:fit-content">
                <p class="poppins-font my-1 yellow--text">
                  Read More
                </p>
                <div class="ma-0 yellow" style="width:100%;height:2px;" />
              </div>
            </div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'image.png'
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
