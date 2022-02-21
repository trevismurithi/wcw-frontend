<template>
  <div>
    <!-- countries sections -->
    <v-card elevation="0">
      <v-card-title class="text-center font-weight-bold my-4 mx-auto text-h4" style="width:60%;color:#FF374F">
        Countries where we currently have presence.
      </v-card-title>
      <div class="d-flex flex-row justify-space-between mx-auto" style="width:60%">
        <v-img src="/images/country.svg" class="mx-4" width="20%" />
        <v-img src="/images/country-2.svg" class="mx-4" width="20%" />
        <v-img src="/images/country-3.svg" class="mx-4" width="20%" />
        <v-img src="/images/country-4.svg" class="mx-4" width="20%" />
      </div>
    </v-card>
    <!-- call to action section -->
    <div
      class="d-flex flex-column justify-center my-10 align-center"
      style="height:500px;background-image:url('/images/BG.png');background-size:cover;background-position:center;"
    >
      <p class="text-h3 white--text font-weight-bold text-center" style="width:50%">
        Are you ready to enhance your entrepreneurial skills, knowledge and confidence?
      </p>
      <p class="white--text body-2 mb-6" style="width:35%">
        WCW is here to help you improve personally by providing the skills,
        resources, and community you need. It is completely free to join.
      </p>
      <v-btn elevation="3" color="#FF374F" class="white--text py-6" width="150px" @click.prevent="registerNow">
        Register Now
      </v-btn>
    </div>
    <!-- footer navigation section -->
    <div class="d-flex flex-row justify-space-around my-4 mx-auto" style="width:70%">
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
              <v-btn color="#FF374F" class="white--text py-6">
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
  methods: {
    registerNow () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style>

</style>
