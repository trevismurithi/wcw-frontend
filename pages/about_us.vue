<template>
  <div>
    <!-- Our history section -->
    <about-history />
    <!-- how we work section -->
    <about-work />
    <!-- our process section -->
    <about-process />
    <!-- video section -->
    <div>
      <v-img src="/images/about/vid.png" />
    </div>
  </div>
</template>

<script>
import AboutHistory from '~/components/about/AboutHistory.vue'
import AboutProcess from '~/components/about/AboutProcess.vue'
import AboutWork from '~/components/about/AboutWork.vue'
export default {
  name: 'AppAboutUs',
  components: { AboutHistory, AboutWork, AboutProcess }
}
</script>

<style>

</style>
