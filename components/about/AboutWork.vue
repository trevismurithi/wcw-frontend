<template>
  <div
    class="mx-auto my-10"
    :class="{
      'd-flex flex-row':largeDevice,
    }"
    style="width:80%"
  >
    <div
      class="white--text rounded-lg"
      :class="{
        'mx-2 pa-6':largeDevice,
        'pa-4 my-4': smallDevice
      }"
      :style="largeDevice ? 'width:40%;background-color:#E41A4A':'width:100%;background-color:#E41A4A'"
    >
      <v-icon class="pa-2 text-h5 rounded-circle mb-6 mt-2" color="#E41A4A" style="background-color:white">
        mdi-calendar-check
      </v-icon>
      <div>
        <p class="text-h5 font-weight-medium">
          Our Solution
        </p>
        <p class="caption font-weight-light">
          We inspire a growth mindset. We equip women with entrepreneurial skills,
          knowledge, and confidence to scale their businesses.  We create an
          environment that builds supportive relationships, fosters networking
          and leverages social capital for greater influence.
        </p>
      </div>
    </div>
    <div
      class="white--text rounded-lg"
      :class="{
        'px-6 mx-2 py-4 ':largeDevice,
        'pa-4':smallDevice
      }"
      style="background-color:#F77733"
    >
      <v-icon class="pa-2 text-h5 rounded-circle mb-6 mt-2" color="#F77733" style="background-color:white">
        mdi-chart-line-variant
      </v-icon>
      <div>
        <p class="text-h5 font-weight-medium">
          Our Approach
        </p>
        <p class="body-2 font-weight-light">
          We use the GAIM methodology:
        </p>
        <p v-for="(step,index) in steps" :key="index" class="caption font-weight-light">
          {{ step }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        'Goal Setting - Enterpreneurs set goals for personal and business transformation',
        'Accountability - accountability partnerships formed through peer and master couching',
        'Inspiration - stories shared with peers and role' +
            'modelling reinforce our confidence that we too can be more and accomplish remarkable achievements.',
        'Mastery - Training & tools, implementations & practice build competencies & enhance confidence'
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
  }
}
</script>

<style>

</style>
