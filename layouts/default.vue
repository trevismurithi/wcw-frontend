<template>
  <v-app>
    <v-container fluid>
      <app-header />
      <Nuxt />
      <app-footer />
    </v-container>
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  name: 'DefaultPage',
  components: { AppHeader, AppFooter }
}
</script>

<style>

</style>
