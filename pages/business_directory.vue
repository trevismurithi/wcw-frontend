<template>
  <div class="mx-auto" style="width:90%">
    <app-select />
    <v-row>
      <v-col>
        <graduate v-for="(image, index) in graduates" :key="index" :image="image" />
      </v-col>
      <v-col>
        <graduate v-for="(image, index) in graduates" :key="index" :image="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Graduate from '~/components/directory/Graduate.vue'
import AppSelect from '~/components/directory/Select.vue'

export default {
  name: 'BusinessDirectory',
  components: { AppSelect, Graduate },
  data: () => {
    return {
      graduates: ['graduate.svg', 'graduate-2.svg', 'graduate-3.svg', 'graduate-4.svg', 'graduate-5.svg']
    }
  }
}
</script>

<style>

</style>
