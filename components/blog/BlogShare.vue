<template>
  <div class="d-flex justify-space-between align-center">
    <read-more />
    <div>
      <v-icon class="mx-2 text-h6" style="color:#FF374F;">
        mdi-thumb-up-outline
      </v-icon>
      <v-icon class="mx-2 text-h6" style="color:#FF374F;">
        mdi-comment-outline
      </v-icon>
      <v-icon class="mx-2 text-h6" style="color:#FF374F;">
        mdi-share-variant-outline
      </v-icon>
    </div>
  </div>
</template>

<script>
import ReadMore from './ReadMore.vue'
export default {
  components: { ReadMore }

}
</script>

<style>

</style>
