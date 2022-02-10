<template>
  <div class="d-flex mx-auto my-6" style="width:65%">
    <div class="mx-4">
      <v-img src="/images/contact/office.png" width="80%" />
    </div>
    <div>
      <!-- three components of location -->
      <location v-for="(station,index) in location" :key="index" :icon="station.icon" :content="station.content" />
      <div class="d-flex justify-space-between">
        <div />
        <div class="d-flex align-center">
          <p class="my-0 body-2 mx-2 font-weight-medium" style="color:#FF374F">
            see on map
          </p>
          <v-icon color="#FF374F">
            mdi-arrow-right
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Location from './Location.vue'
export default {
  components: { Location },
  props: {
    location: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-map-marker-outline',
          content: '121 Helen Joseph, 21 Avenue, Johannesburg, JHB 92103-9000'
        },
        {
          icon: 'mdi-phone-outline',
          content: '1(234)567-891'
        },
        {
          icon: 'mdi-email-outline',
          content: 'contact@gmthub.online'
        }
      ]
    }
  }
}
</script>

<style>

</style>
