<template>
  <v-row class="mx-auto my-14" style="width:80%">
    <v-col class="d-flex align-center justify-center">
      <v-card width="100%" elevation="0">
        <!-- condition to display a smaller view for the headers -->
        <div class="py-4 rounded-lg" style="background-color:#E41A4A;">
          <p
            class="white--text px-4"
            :class="{
              'text-h4 font-weight-medium': largeDevice,
              'text-h6 font-weight-medium': smallDevice
            }"
            :style="largeDevice ? 'width:80%' : 'width:100%'"
          >
            Ignite Accelerator Course (6-10 Months)
          </p>
        </div>
        <p
          class="py-4"
          :class="{
            'text-h4 font-weight-medium': largeDevice,
            'text-h6 font-weight-medium': smallDevice
          }"
        >
          Blended Learning Digital Course
        </p>
        <v-sheet class="my-6" :width="largeDevice ? '90%' : '100%'" outlined color="#E41A4A" rounded="lg">
          <v-card class="px-0 py-4" rounded="lg">
            <div class="text-center">
              <p class="font-weight-medium text-center text-h6">
                5 Modules
              </p>
            </div>
            <div class="mx-auto" :style="largeDevice ? 'width:60%' : 'width:80%'">
              <p v-for="(text,index) in list" :key="index" class="my-0 body-2 font-weight-light">
                {{ index+1 }}. {{ text }}
              </p>
            </div>
          </v-card>
        </v-sheet>
        <v-btn class="mt-6 poppins-font" color="#E41A4A" outlined @click.prevent="navigateTo">
          Learn More
        </v-btn>
      </v-card>
    </v-col>
    <v-col class="d-flex justify-center">
      <div style="width:70%">
        <v-img src="/images/lady.png" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomeIgnite',
  data: () => {
    return {
      list: [
        'Personal mastery and leadership',
        'Demand & gearing for growth',
        'Scaling through systemization',
        'Winning markets',
        'know, find and grow your money'
      ]
    }
  },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
    navigateTo () {
      this.$router.push('/courses');
    }
  }
}
</script>

<style>

</style>
