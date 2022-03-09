<template>
  <div class="py-6">
    <div
      class="py-14 mx-auto"
      style="width:90%;"
    >
      <intro />
    </div>
    <!-- connect and inspire section -->
    <card-view />
    <!-- access to market -->
    <v-row class="my-6 mx-auto" :style="largeDevice?'width:70%':'width:100%'">
      <v-col style="width:50%">
        <v-img src="/images/image-3.png" width="100%" />
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <p
          class="text-h4 font-weight-medium mx-6"
          :class="{
            'text-h4':largeDevice,
            'text-h5':smallDevice
          }"
        >
          ACCESS TO MARKET
        </p>
        <p
          :class="{
            'mx-6 body-2':largeDevice,
            'caption':smallDevice
          }"
        >
          A platform that facilitates market access through a
          business directory, market champions,
          highliting deal opportunities and industry engagement.
        </p>
        <v-btn
          elevation="0"
          color="#FF374F"
          class="white--text mx-6 py-6 poppins-font"
          width="45%"
          @click.prevent="registerNow"
        >
          Register Now
        </v-btn>
      </v-col>
    </v-row>
    <!-- Access funding -->
    <card-view
      image="image-2.png"
      heading="ACCESS TO FUNDING"
      context="A knowledge platform that is facilitated
      through financial wellness, pitching practices,
      investor showcasing and wealth management coaching."
      sub-h="Get the right funding"
      sub-h2="Perfect your pitch"
      sub-h3="Understand investor relations"
      sub-c="You'll need a way to finance a business in order to accomplish your business aspirations."
      sub-c2="Obtaining finance requires an impressive pitch deck to persuade investors."
      sub-c3="Investors are in the business of putting money into companies that are growing."
    />
    <!-- big card with many images -->
    <div class="mx-auto rounded-lg" :style="largeDevice?'background-color:#FF374F;width:80%':'background-color:#FF374F;width:100%'">
      <div class="mx-auto pt-10 text-center" :style="largeDevice?'width:60%':'width:80%'">
        <p
          class="white--text font-weight-medium"
          :class="{
            'text-h4':largeDevice,
            'text-h5':smallDevice
          }"
        >
          We have the support you are looking for
        </p>
        <p class="caption white--text">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterate approaches
          to corporate strategy faster collaborative thinking to further the overall value proposition.
        </p>
      </div>
      <div class="mx-auto" style="width:80%">
        <story-column />
      </div>
    </div>
    <div class="my-14">
      <div
        class="mx-auto pa-4"
        :style="largeDevice?'width:50%':'width:100%'"
      >
        <p
          class="text-center font-weight-bold"
          :class="{
            'text-h3':largeDevice,
            'text-h5':smallDevice
          }"
          style="color:#FF374F"
        >
          Our Success Stories
        </p>
        <p class="body-2 font-weight-medium text-center">
          More than practical knowledge is required for business success.
          WCW aims to empower women in their personal and professional growth.
          Learn from the experience of our alumni.
        </p>
      </div>
      <story-article :category="categories" />
    </div>
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import StoryColumn from '~/components/story/StoryColumn.vue'
import StoryArticle from '~/components/story/StoryArticle.vue'
import CardView from '~/components/CardView.vue'

export default {
  name: 'AppStoryPage',
  components: { CardView, Intro, StoryColumn, StoryArticle },
  data () {
    return {
      categories: [
        {
          image: 'slide-2.png'
        },
        {
          image: 'slide.png'
        },
        {
          image: 'slide-3.png'
        }
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
