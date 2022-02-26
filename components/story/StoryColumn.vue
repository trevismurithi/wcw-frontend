<template>
  <v-row>
    <v-col class="d-flex justify-space-around flex-column">
      <image-text title="How To Talks" />
      <image-text image="support-2.png" title="Publications" />
    </v-col>
    <v-col class="d-flex justify-space-around flex-column">
      <card-text />
      <div>
        <image-text image="support-3.png" title="News & Updates" />
        <image-text image="support-4.png" title="Resources" />
      </div>
    </v-col>
    <v-col class="d-flex justify-space-around flex-column">
      <image-text image="support-5.png" title="Training & Workshops" />
      <image-text image="support-6.png" title="Events" />
    </v-col>
  </v-row>
</template>

<script>
import CardText from './CardText.vue'
import ImageText from './ImageText.vue'
export default {
  components: { ImageText, CardText }

}
</script>

<style>

</style>
