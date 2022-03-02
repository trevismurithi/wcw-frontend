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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  .montserrate-font{
    font-family: 'Montserrat', sans-serif !important;
  }
 .dm-serif-font{
   font-family: 'DM Serif Display', sans-serif !important;
 }
 .poppins-font{
   font-family: 'Poppins', sans-serif !important;
 }
</style>
