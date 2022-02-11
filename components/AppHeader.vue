<template>
  <v-app-bar elevation="0" class="white">
    <v-app-bar-nav-icon />
    <v-spacer />
    <v-toolbar-title v-for="(nav, index) in headers" :key="index" class="mx-3 text-h6">
      <nuxt-link :to="nav.path" style="color:black;text-decoration:none;">
        {{ nav.name }}
      </nuxt-link>
    </v-toolbar-title>
    <v-btn
      class="font-weight-medium white--text px-4 mx-2"
      color="#FF374F"
      elevation="0"
      @click.prevent="registerNow"
    >
      register
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
          path: '/'
        },
        {
          name: 'Online Courses',
          path: '/courses'
        },
        {
          name: 'Call-For-Application',
          path: '/signup'
        },
        {
          name: 'Community',
          path: '/'
        },
        {
          name: 'Business Directory',
          path: '/business_directory'
        },
        {
          name: 'Blog',
          path: '/'
        },
        {
          name: 'Contact Us',
          path: '/contact_us'
        }
      ]
    }
  },
  methods: {
    registerNow () {
      this.$router.push('/contact_us')
    }
  }
}
</script>

<style>
</style>
