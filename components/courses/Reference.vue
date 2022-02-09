<template>
  <div class="mx-auto" style="width:80%">
    <p class="text-h3 text-center font-weight-black" style="color:#FF374F">
      500+
    </p>
    <p class="text-center body-2">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppReference',
  props: {
    title: {
      type: String,
      default: '500+'
    },
    content: {
      type: String,
      default: 'Women have already joined the course and benefiting from it.'
    }
  }
}
</script>

<style>

</style>
