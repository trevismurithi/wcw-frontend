<template>
  <v-card width="100%" elevation="0">
    <v-card
      elevation="0"
      width="70%"
      class="mx-auto my-4"
    >
      <div style="background-image:url('/images/hero.png');background-size:contain;">
        <v-card-text class="text-center">
          Brought to you by Graca Machel Trust
        </v-card-text>
        <v-card-text class="text-center mx-auto text-h4 font-weight-medium" style="width:55%; color:#FF374F;">
          A Capacity Building Entrepreneurship Accelerator Programme for Women in Africa
        </v-card-text>
        <v-card-text class="text-center mx-auto" style="width:45%;">
          Connectiong 10,000+ women to transform their business and drive intra-Africa trade
        </v-card-text>
        <!-- two buttons for register and more about us -->
        <v-row class="my-6 mx-auto" style="width:50%">
          <v-col class="text-center">
            <v-btn elevation="0" color="#FF374F" class="white--text">
              Register Now
            </v-btn>
          </v-col>
          <v-col class="text-center">
            <v-btn elevation="0" color="#FFCC18" outlined class="font-weight-bold">
              More About Us
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-img
        src="/images/frame.png"
      />
    </v-card>
    <!-- start about us section -->
    <v-row
      class="my-2 py-16"
      style="
      background-color:#FF374F;
      background-image:url('/images/mask.png');
      background-size:contain;background-repeat:no-repeat;"
    >
      <v-col class="py-10">
        <v-img
          class="mx-auto"
          width="60%"
          src="/images/about.png"
        />
      </v-col>
      <v-col class="d-flex align-center">
        <div style="width:60%">
          <p class="font-weight-bold text-h4 white--text">
            About Us
          </p>
          <p class="white--text body-2">
            For the past 6 years the Women Creating Wealth (WCW) program has helped 430 African women entrepreneurs(AWEs)
            strengthen their entrepreneurial skills and transform their business from income generating micro-ventures into
            impactful wealth creating Enterprises.
          </p>
          <div class="d-flex align-center" style="color:#FFCC18">
            More About Us
            <v-icon style="color:#FFCC18">
              mdi-arrow-right
            </v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- end of the about us section -->
    <!-- Our patners section -->
    <div class="d-flex flex-column justify-center" style="height:300px">
      <v-card-text class="mx-auto text-h4 font-weight-bold my-4" style="width:40%; color:#FF374F;">
        Our Patners and Sponsors
      </v-card-text>
      <partners-sponsors />
    </div>
    <!-- start of the step section -->
    <v-card
      elevation="0"
      class="mx-auto"
      width="80%"
    >
      <v-card-text class="text-center mx-auto text-h4 font-weight-bold" style="width:70%; color:#FF374F;">
        How do we support women on their journey to wealth creation?
      </v-card-text>
      <div
        class="d-flex justify-space-between mx-auto my-4"
        style="width:70%"
      >
        <step-card />
        <step-card
          :value="2"
          title="Step 2"
          body="We encourage and prepare women entrepreneurs to
          improve their business formalization and
          compliance in order to minimise risks and boost market access."
        />
      </div>
      <div
        class="d-flex justify-space-between mx-auto my-4"
        style="width:70%"
      >
        <step-card
          :value="3"
          title="Step 3"
          body="With lots of unique blocks, you can easily build a page without coding."
        />
        <step-card
          :value="4"
          title="Step 4"
          body="With lots of unique blocks, you can easily build a page without coding"
        />
      </div>
    </v-card>
    <!-- end of step section -->
    <!-- start what you will get -->
    <v-card-text class="text-center mx-auto text-h4 font-weight-bold mt-10" style="width:50%; color:#FF374F;">
      What you Will Get
    </v-card-text>
    <container />
    <!-- end of what you will get -->
    <div class="d-flex flex-column justify-center" style="height:300px">
      <v-card-text class="text-center mx-auto text-h4 font-weight-bold mt-10" style="width:40%; color:#FF374F;">
        From Income Generation to Wealth Creation
      </v-card-text>
      <v-card-text class="text-center mx-auto body-2 font-weight-light grey--text" style="width:40%;">
        The WCW Business Community is a post-WCW graduation three year support
        intervention to help increase the performance of the alumni in
        their growth journey and make the WCW dream a reality
      </v-card-text>
    </div>
    <!-- connect and inspire section -->
    <card-view />
    <!-- access to market -->
    <v-row class="my-6 mx-auto" style="width:70%">
      <v-col style="width:50%">
        <v-img src="/images/image-3.png" width="100%" />
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <p class="text-h4 font-weight-bold mx-6">
          ACCESS TO MARKET
        </p>
        <p class="mx-6 body-2">
          A platform that facilitates market access through a
          business directory, market champions,
          highliting deal opportunities and industry engagement.
        </p>
        <v-btn
          elevation="0"
          color="#FF374F"
          class="white--text mx-6 py-6"
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
    <testimonials />
  </v-card>
</template>

<script>
import PartnersSponsors from '~/components/PatnersSponsors.vue'
import CardView from '~/components/CardView.vue'
import StepCard from '~/components/StepCard.vue'
import Testimonials from '~/components/Testimonials.vue'
export default {
  name: 'AppPage',
  components: { StepCard, CardView, PartnersSponsors, Testimonials },
  methods: {
    registerNow () {
      this.$router.push('/contact_us')
    }
  }
}
</script>
<style>

</style>
