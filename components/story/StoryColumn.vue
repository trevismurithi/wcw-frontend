<template>
  <v-row>
    <v-col class="d-flex justify-space-around flex-column">
      <image-text />
      <image-text image="support-2.png" />
    </v-col>
    <v-col class="d-flex justify-space-around flex-column">
      <card-text />
      <div>
        <image-text image="support-3.png" />
        <image-text image="support-4.png" />
      </div>
    </v-col>
    <v-col class="d-flex justify-space-around flex-column">
      <image-text image="support-5.png" />
      <image-text image="support-6.png" />
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
