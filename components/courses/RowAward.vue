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
      default: () => ['How to improve yourself with small tasks.', 'How to utilize your time while working hard.', 'How to think creatively.']
    }
  }

}
</script>

<style>

</style>
