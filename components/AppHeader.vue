<template>
  <v-app-bar elevation="0" class="white">
    <v-app-bar-nav-icon />
    <v-spacer />
    <v-toolbar-title v-for="(title, index) in headers" :key="index" class="mx-3 text-h6">
      {{ title }}
    </v-toolbar-title>
    <v-btn
      class="font-weight-medium white--text px-4 mx-2"
      color="#FF374F"
      elevation="0"
    >
      register
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      headers: ['Home', 'About Us', 'Online Courses',
        'Call-For-Application', 'Community', 'Business Directory', 'Blog', 'Contact Us']
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
  .text-h6{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>
