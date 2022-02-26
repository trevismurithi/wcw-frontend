<template>
  <div class="d-flex flex-row justify-space-around mx-auto my-6" style="width:80%">
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
  }

}
</script>

<style>

</style>
