<template>
  <div>
    <v-navigation-drawer
      v-if="smallDevice"
      v-model="drawer"
      app
    >
      <v-list-item style="background-color:#FF374F;">
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text">
            WCW
          </v-list-item-title>
          <v-list-item-subtitle class="caption white--text">
            Women Creating Wealth
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
      <v-list>
        <v-list-item v-for="(nav, index) in headers" :key="index">
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="body-2">
            <nuxt-link :to="nav.path" style="color:black;text-decoration:none;">
              {{ nav.name }}
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0" class="white">
      <v-app-bar-nav-icon v-if="smallDevice" @click="drawer = !drawer" />
      <v-img v-else src="/images/wcw.png" contain position="center" height="40px" />
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      headers: [
        {
          name: 'Home',
          path: '/',
          icon: 'mdi-home'
        },
        {
          name: 'About Us',
          path: '/about_us',
          icon: 'mdi-information'
        },
        // {
        //   name: 'IGNITE Accelerator',
        //   path: '/courses',
        //   icon: 'mdi-school'
        // },
        // {
        //   name: 'Call-For-Application',
        //   path: '/signup',
        //   icon: 'mdi-format-align-justify'
        // },
        {
          name: 'Community',
          path: '/story',
          icon: 'mdi-account-group'
        },
        {
          name: 'Business Directory',
          path: '/business_directory',
          icon: 'mdi-subdirectory-arrow-right'
        },
        {
          name: 'News and Updates',
          path: '/blog',
          icon: 'mdi-book'
        },
        {
          name: 'Contact Us',
          path: '/contact_us',
          icon: 'mdi-contacts'
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
      this.$router.push('/application')
    }
  }
}
</script>

<style>
</style>
