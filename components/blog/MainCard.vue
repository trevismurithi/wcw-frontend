<template>
  <v-card class="grey lighten-3" elevation="0">
    <v-img src="/images/blog/blog.png" />
    <div class="pa-6">
      <p class="title">
        How women are shaping the future of business.
      </p>
      <p class="caption font-weight-medium">
        The business landscape is changing. COVID-19 pandemic aside,
        attitudes towards traditional ways of doing business are changing.
      </p>
      <blog-share />
    </div>
  </v-card>
</template>

<script>
import BlogShare from './BlogShare.vue'
export default {
  components: { BlogShare }

}
</script>

<style>

</style>
