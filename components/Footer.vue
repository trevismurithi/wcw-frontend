<template>
  <div>
    <!-- countries sections -->
    <v-card elevation="0">
      <v-card-title
        class="text-center font-weight-medium my-4 mx-auto"
        :class="{
          'text-h6': $vuetify.breakpoint.smAndDown,
          'text-h4': $vuetify.breakpoint.mdAndUp,
        }"
        :style="largeDevice?'width:60%;color:#FF374F':'width:100%;color:#FF374F'"
      >
        Countries where we currently have presence.
      </v-card-title>
      <div
        :class="{
          'text-h5': $vuetify.breakpoint.smAndDown,
          'd-flex flex-row justify-space-between mx-auto': $vuetify.breakpoint.mdAndUp,
        }"
        :style="largeDevice?'width:60%':'width:100%'"
      >
        <v-img src="/images/country.svg" class="mx-auto my-4" :width="largeDevice?'20%':'80%'" />
        <v-img src="/images/country-2.svg" class="mx-auto my-4" :width="largeDevice?'20%':'80%'" />
        <v-img src="/images/country-3.svg" class="mx-auto my-4" :width="largeDevice?'20%':'80%'" />
        <v-img src="/images/country-4.svg" class="mx-auto my-4" :width="largeDevice?'20%':'80%'" />
      </div>
    </v-card>
    <!-- call to action section -->
    <div
      class="d-flex flex-column justify-center my-10 align-center"
      style="height:500px;background-image:url('/images/BG.jpg');background-size:cover;background-position:center;"
    >
      <p
        class="white--text font-weight-medium text-center"
        :class="{
          'text-h6': $vuetify.breakpoint.smAndDown,
          'text-h3': $vuetify.breakpoint.mdAndUp,
        }"
        :style="largeDevice?'width:50%':'width:100%'"
      >
        Are you ready to enhance your entrepreneurial skills, knowledge and confidence?
      </p>
      <p
        class="white--text"
        :class="{
          'caption': $vuetify.breakpoint.smAndDown,
          'body-2 mb-6': $vuetify.breakpoint.mdAndUp,
        }"
        :style="largeDevice?'width:35%':'width:80%'"
      >
        WCW is here to help you improve personally by providing the skills,
        resources, and community you need. It is completely free to join.
      </p>
      <v-btn elevation="3" color="#FF374F" class="white--text py-6 poppins-font" width="150px" @click.prevent="registerNow">
        Register Now
      </v-btn>
    </div>
    <!-- footer navigation section -->
    <div v-if="largeDevice" class="d-flex flex-row justify-space-around my-4 mx-auto" style="width:70%">
      <div v-for="(nav,index) in navigation" :key="index" class="mx-4">
        <p class="font-weight-bold text-subtitle">
          {{ paths[index] }}
        </p>
        <div>
          <p v-for="(name,i) in nav" :key="i" class="text-caption">
            {{ name.name }}
          </p>
        </div>
      </div>
      <div style="width:300px">
        <p class="font-weight-bold">
          Subscibe to Our Newsletter
        </p>
        <div>
          <p>Get exicited to receive our emails, filled with educational and inspirational content guide.</p>
          <v-hover open-delay="2000" close-delay="1000" :disabled="false">
            <div class="d-flex flex-row">
              <v-text-field solo append-icon="mdi-email-outline" label="Enter your email" />
              <v-btn color="#FF374F" class="white--text py-6 poppins-font">
                Subscribe
              </v-btn>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => {
    return {
      paths: ['Community', 'About Us', 'Useful'],
      navigation: [
        [
          {
            name: 'Connect & Inspire',
            path: ''
          },
          {
            name: 'Access to Funding',
            path: ''
          },
          {
            name: 'Podcast',
            path: ''
          }
        ],
        [
          {
            name: 'Meet the Team',
            path: ''
          },
          {
            name: 'Our Story',
            path: ''
          },
          {
            name: 'Career',
            path: ''
          }
        ],
        [
          {
            name: 'Blog',
            path: ''
          },
          {
            name: 'Podcast',
            path: ''
          },
          {
            name: 'Videos',
            path: ''
          }
        ]
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
    registerNow () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style>

</style>
