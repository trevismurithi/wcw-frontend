<template>
  <v-row>
    <!-- first container -->
    <v-col style="width:50%">
      <v-row>
        <v-col class="black">
          <div>
            <v-img src="/images/cont.png" />
          </div>
        </v-col>
        <v-col class="black">
          <div
            class="d-flex flex-column justify-center pa-4"
            :class="{
              'pa-0': $vuetify.breakpoint.smAndDown,
              'pa-4': $vuetify.breakpoint.mdAndUp,
            }"
            style="background-color:black;"
          >
            <div class="my-4">
              <p
                class="white--text font-weight-medium"
                :class="{
                  'body-2 font-weight-bold': $vuetify.breakpoint.smAndDown,
                  'text-h5 font-weight-medium': $vuetify.breakpoint.mdAndUp,
                }"
              >
                Enhanced Capacity to Grow
              </p>
              <p
                class="body-2 white--text font-weight-light"
                :class="{
                  'caption': $vuetify.breakpoint.smAndDown,
                  'body-2': $vuetify.breakpoint.mdAndUp,
                }"
              >
                We strengthen women entrepreneurs' knowledge, confidence and desire to scale their business.
              </p>
            </div>
            <div class="my-4">
              <p
                class="white--text"
                :class="{
                  'body-2 font-weight-bold': $vuetify.breakpoint.smAndDown,
                  'text-h5 font-weight-medium': $vuetify.breakpoint.mdAndUp,
                }"
              >
                Resources to Improve Business Formalisation
              </p>
              <p
                class="white--text font-weight-light"
                :class="{
                  'caption': $vuetify.breakpoint.smAndDown,
                  'body-2': $vuetify.breakpoint.mdAndUp,
                }"
              >
                We provide tools and templates that help formalise a business and
                develop systems and processes for operational efficiency and excellence.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <!-- second container -->
    <v-col style="width:50%">
      <v-row>
        <v-col class="black">
          <div>
            <v-img src="/images/cont-2.png" />
          </div>
        </v-col>
        <v-col class="black">
          <div
            class="d-flex flex-column justify-center pa-4"
            :class="{
              'pa-0': $vuetify.breakpoint.smAndDown,
              'pa-4': $vuetify.breakpoint.mdAndUp,
            }"
            style="background-color:black;"
          >
            <div class="my-4">
              <p
                class="white--text font-weight-medium"
                :class="{
                  'body-2 font-weight-bold': $vuetify.breakpoint.smAndDown,
                  'text-h5 font-weight-medium': $vuetify.breakpoint.mdAndUp,
                }"
              >
                Market and Investment Readiness
              </p>
              <p
                class="body-2 white--text font-weight-light"
                :class="{
                  'caption': $vuetify.breakpoint.smAndDown,
                  'body-2': $vuetify.breakpoint.mdAndUp,
                }"
              >
                We de-risk entrepreneurs in readiness for investment by focusing on compliance,
                market savviness and pitch practice.
              </p>
            </div>
            <div class="my-4">
              <p
                class="white--text"
                :class="{
                  'body-2 font-weight-bold': $vuetify.breakpoint.smAndDown,
                  'text-h5 font-weight-medium': $vuetify.breakpoint.mdAndUp,
                }"
              >
                Value-Generating Business Community
              </p>
              <p
                class="white--text font-weight-light"
                :class="{
                  'caption': $vuetify.breakpoint.smAndDown,
                  'body-2': $vuetify.breakpoint.mdAndUp,
                }"
              >
                We support women entrepreneurs in regional business communities to achieve their growth plans,
                network,increase their skill and work collaboratively to access markets and finance.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'AppContainer'
}
</script>
