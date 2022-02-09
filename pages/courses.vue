<template>
  <div class="my-6 mx-auto" style="width:100%">
    <div class="d-flex flex-row justify-space-between my-12 mx-auto" style="width:90%">
      <!-- right side content -->
      <div class="" style="width:50%">
        <p class="body-2">
          Develop your skills and confidence
        </p>
        <p class="text-h4 font-weight-bold" style="color:#FF374F">
          Join Ignite online courses and workshops
        </p>
      </div>
      <!-- pink divider -->
      <div class="my-4" style="background-color:#FF374F;width:1px;" />
      <!-- left side content -->
      <div class="body-2 d-flex align-center" style="width:35%">
        <p class="my-2">
          Women Creating Wealth is a Pan African entrepreneurship programme that has significantly
          grown the businesses and positively impacted the entrepreneurial behaviours, skills and
          confidence of women entrepreneurs.
        </p>
      </div>
    </div>
    <!-- image of two people -->
    <v-img src="/images/courses/two_people.png" />
    <image-right />
    <v-card elevation="0" width="100%" class="grey lighten-3 py-14">
      <div class="mx-auto mb-14 text-center pt-14" style="width:50%">
        <p class="text-h3 font-weight-bold text-center" style="color:#FF374F">
          Things you'll learn
        </p>
        <v-card-text class="body-2">
          We have compiled Ignite course keeping in mind all the fundamental and important aspects that you need to know.
        </v-card-text>
      </div>
      <row-award />
      <row-award v-for="(award, index) in awards" :key="index" :awards="award.content" />
      <!-- free ebook section -->
      <ebook />
      <!-- statistics section -->
      <div class="d-flex flex-row mx-auto justify-space-between" style="width:80%">
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
      </div>
    </v-card>
    <div class="my-14" style="background-image:url('/images/courses/2ovals.png');background-size:cover;">
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
    </div>
  </div>
</template>

<script>
import Ebook from '~/components/courses/Ebook.vue'
import ImageRight from '~/components/courses/ImageRight.vue'
import RowAward from '~/components/courses/RowAward.vue'
import AppReference from '~/components/courses/Reference.vue'
import RowSocial from '~/components/courses/RowSocial.vue'
export default {
  name: 'AppCourses',
  components: { ImageRight, RowAward, Ebook, AppReference, RowSocial },
  data: () => {
    return {
      awards: [
        {
          content: ['Solving your problems without hurting yourself.', 'Making money smartly.', 'Developing new skills fast and furious!']
        },
        {
          content: ['Understing people 101.', '10 secrets to solve any problem easily.', 'Creating valuable goal for next 5 years.']
        }
      ]
    }
  }
}
</script>

<style>

</style>
