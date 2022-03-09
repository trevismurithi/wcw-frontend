<template>
  <div class="my-6 mx-auto" style="width:100%">
    <div
      class="my-12 mx-auto"
      :class="{
        'd-flex flex-row justify-space-between':largeDevice,
        '':smallDevice
      }"
      :style="largeDevice?'width:90%':'width:100%'"
    >
      <!-- right side content -->
      <div class="" :style="largeDevice?'width:40%':'width:100%'">
        <p class="text-h6 font-weight-bold grey--text">
          Develop your skills and confidence
        </p>
        <p class="text-h4 font-weight-bold" style="color:#FF374F">
          Join Ignite online courses and workshops
        </p>
        <p class="body-2">
          IGNITE is a 5-10 months learning intervention that covers 5
          blended-learning modules that will help the women
          entrepreneurs develop their skills, confidence and knowledge
        </p>
      </div>
      <!-- pink divider -->
      <div class="my-4" style="background-color:#FF374F;width:2px;" />
      <!-- left side content -->
      <div class="d-flex justify-center align-center" :style="largeDevice ? 'width:35%' : 'width:100%'">
        <div
          class="rounded-lg "
          :class="{
            'my-4':smallDevice
          }"
          :style="largeDevice?'border:2px solid black;width:80%':'border:2px solid black;width:100%'"
        >
          <v-card class="pa-4" rounded="lg">
            <div class="">
              <p class="font-weight-bold text-h6">
                5 Modules
              </p>
            </div>
            <div class="mx-auto" style="width:100%">
              <p v-for="(text,index) in list" :key="index" class="my-0 body-2 font-weight-light">
                {{ index+1 }}. {{ text }}
              </p>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <!-- image of two people -->
    <v-img src="/images/courses/two_people.png" />
    <image-right />
    <v-card elevation="0" width="100%" class="grey lighten-3 py-14">
      <div class="mx-auto mb-14 text-center pt-14" :style="largeDevice?'width:50%':'width:100%'">
        <p
          class="font-weight-medium text-center"
          :class="{
            'text-h3':largeDevice,
            'text-h6':smallDevice
          }"
          style="color:#FF374F"
        >
          Things you'll learn
        </p>
        <v-card-text
          :class="{
            'body-2':largeDevice,
            'caption':smallDevice
          }"
        >
          We have compiled Ignite course keeping in mind all the fundamental and important aspects that you need to know.
        </v-card-text>
      </div>
      <row-award />
      <row-award v-for="(award, index) in awards" :key="index" :awards="award.content" />
      <!-- free ebook section -->
      <ebook />
      <!-- statistics section -->
      <!-- <div class="d-flex flex-row mx-auto justify-space-between" style="width:80%">
        <div class="mx-3">
          <app-reference />
        </div>
        <div class="mx-3">
          <app-reference
            title="96%"
            content="Satisfaction rate from our awesome entrepreneurs"
          />
        </div>
        <div class="mx-3">
          <app-reference
            title="4.9/5.0"
            content="Average rating from our alumni"
          />
        </div>
      </div> -->
    </v-card>
    <!-- <div class="my-14" style="background-image:url('/images/courses/2ovals.png');background-size:cover;">
      <div style="height:10vh" />
      <div class="mx-auto" style="width:50%">
        <p class="text-h4 font-weight-bold text-center" style="color:#FF374F;">
          400+ Women Entrepreneurs Trust Our Programme. Be the Next!
        </p>
        <p class="body-2 text-center grey--text">
          Women entrepreneurs are becoming more prevalent, which can contribute to promoting
          economic and social fairness, as well as improve the utilization of valuable human capital
        </p>
      </div>
      <div style="height:20vh" />
      <div class="mx-auto" style="width:80%">
        <row-social />
        <row-social />
      </div>
      <div style="height:25vh" />
    </div> -->
  </div>
</template>

<script>
import Ebook from '~/components/courses/Ebook.vue'
import ImageRight from '~/components/courses/ImageRight.vue'
import RowAward from '~/components/courses/RowAward.vue'

export default {
  name: 'AppCourses',
  components: { ImageRight, RowAward, Ebook },
  data: () => {
    return {
      awards: [
        {
          content: ['Systemize your business to scale for growth',
            'Marketing & sales, value & supply chains to win markets',
            'Financial Management']
        },
        {
          content: ['Ensuring the compliance of your business',
            'Investor readiness tips and practises',
            'How to collaborate creatively']
        }
      ],
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
  }
}
</script>
<style>

</style>
