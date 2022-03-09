<template>
  <v-app-bar elevation="0" class="white">
    <v-app-bar-nav-icon />
    <v-spacer />
    <v-toolbar-title v-for="(nav, index) in headers" :key="index" class="mx-3 body-2 font-weight-bold">
      <nuxt-link v-if="largeDevice" :to="nav.path" style="color:black;text-decoration:none;">
        {{ nav.name }}
      </nuxt-link>
    </v-toolbar-title>
    <v-btn
      v-if="largeDevice"
      class="font-weight-medium white--text px-4 mx-2 poppins-font"
      color="#FF374F"
      elevation="0"
      @click.prevent="registerNow"
    >
      register now
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About Us',
          path: '/about_us'
        },
        {
          name: 'IGNITE Accelerator',
          path: '/courses'
        },
        {
          name: 'Call-For-Application',
          path: '/signup'
        },
        {
          name: 'Community',
          path: '/story'
        },
        {
          name: 'Business Directory',
          path: '/business_directory'
        },
        {
          name: 'Publications',
          path: '/blog'
        },
        {
          name: 'Contact Us',
          path: '/contact_us'
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
