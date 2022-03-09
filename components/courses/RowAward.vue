<template>
  <div
    class="mx-auto my-6"
    :class="{
      'd-flex flex-row justify-space-around':largeDevice,
    }"
    :style="largeDevice?'width:80%':'width:90%'"
  >
    <award :content="awards[0]" />
    <award :content="awards[1]" />
    <award :content="awards[2]" />
  </div>
</template>

<script>
import Award from './Award.vue'
export default {
  components: { Award },
  props: {
    awards: {
      type: Array,
      default: () => ['Connection of your life purpose to your business strategic objective',
        'Emotional intelligence self and social awareness and skills',
        'Starting innovative business ventures']
    }
  },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style>

</style>
