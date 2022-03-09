<template>
  <v-card width="100%" elevation="0">
    <v-card
      elevation="0"
      :width="largeDevice?'80%':'100%'"
      class="mx-auto my-4"
    >
      <div>
        <v-card-text
          class="text-center font-weight-medium grey--text text-h6"
        >
          Brought to you by Graca Machel Trust
        </v-card-text>
        <v-card-text
          class="text-center mx-auto"
          :class="{
            'text-h6': $vuetify.breakpoint.smAndDown,
            'text-h3': $vuetify.breakpoint.mdAndUp,
          }"
          style="width:100%; color:#FF374F;"
        >
          A Pan-African Movement that inspires,equips, and empowers female entrepreneurs to build wealth-generating businesses.
        </v-card-text>
        <!-- display text on large device -->
        <v-card-text v-if="largeDevice" class="text-center mx-auto poppins-font" style="width:45%;">
          Connectiong 10,000+ women to transform their business and drive intra-Africa trade
        </v-card-text>
        <v-card-text v-else class="text-center mx-auto poppins-font">
          Connectiong 10,000+ women to transform their business and drive intra-Africa trade
        </v-card-text>
        <!-- two buttons for register and more about us -->
        <v-row class="my-6 mx-auto" style="width:50%">
          <v-col class="text-center">
            <v-btn elevation="0" color="#FF374F" class="white--text poppins-font" @click.prevent="registerNow">
              Register Now
            </v-btn>
          </v-col>
          <v-col class="text-center">
            <v-btn elevation="0" color="#FFCC18" outlined class="poppins-font px-4">
              About Us
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-img
      src="/images/frame-4.png"
    />
    <!-- start about us section -->
    <div style="background-color:#E41A4A;">
      <v-row
        class="mb-2 pa-4 mx-auto"
        style="width:80%"
      >
        <v-col class="d-flex justify-center pa-4">
          <div class="pa-4" style="width:80%">
            <v-img
              src="/images/about.png"
            />
          </div>
        </v-col>
        <v-col class="d-flex align-center">
          <div style="width:100%">
            <p class="font-weight-medium text-h4 white--text">
              About Us
            </p>
            <p class="white--text body-2">
              We believe more capital in the hands of
              women will go a long way in addressing
              our major socio-economic challenges because
              research shows women generally spend more
              of their money on the health, education
              and well-being of their families and communities.
            </p>
            <p class="white--text body-2">
              WCW is an Entrepreneurship Development
              Programme that inspires, upskills and connects
              women in Africa to transform their businesses
              from income generation to wealth creation
              enterprises.
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
    </div>
    <!-- end of the about us section -->
    <!-- Our patners section -->
    <div class="mx-auto my-14" style="width:100%">
      <v-card-text class="mx-auto text-h4 font-weight-medium my-4 text-center" style="color:#FF374F;">
        Our Patners and Sponsors
      </v-card-text>
      <partners-sponsors />
    </div>
    <!-- start what you will get -->
    <p v-if="largeDevice" class="text-center mx-auto text-h4 font-weight-medium mt-14" style="width:50%; color:#FF374F;">
      What you Will Get
    </p>
    <p v-else class="text-center mx-auto text-h5 font-weight-medium mt-14" style="color:#FF374F;">
      What you Will Get
    </p>
    <container />
    <!-- end of what you will get -->
    <!-- Ignite Accelerator course -->
    <home-ignite />
    <!-- business community section -->
    <home-community />
    <testimonials />
  </v-card>
</template>

<script>
import PartnersSponsors from '~/components/PatnersSponsors.vue'
import Testimonials from '~/components/Testimonials.vue'
import HomeIgnite from '~/components/HomeIgnite.vue'
import HomeCommunity from '~/components/HomeCommunity.vue'
export default {
  name: 'AppPage',
  components: { PartnersSponsors, Testimonials, HomeIgnite, HomeCommunity },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
    registerNow () {
      this.$router.push('/signup')
    }
  }
}
</script>
<style>
</style>
