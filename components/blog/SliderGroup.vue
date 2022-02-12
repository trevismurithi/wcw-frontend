<template>
  <v-sheet
    class="mx-auto grey lighten-4 rounded-lg"
    elevation="0"
    width="90%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
    >
      <v-slide-item
        v-for="(n,index) in category"
        :key="index"
      >
        <v-card
          elevation="0"
          class="ma-4 grey lighten-4"
          height="200"
          width="150"
        >
          <v-img :src="'/images/blog/'+n.image" />
          <p class="body-2 font-weight-black text-center my-2" style="color:#FF374F;">
            {{ n.state }}
          </p>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default: () => [
        {
          image: 'category.png',
          state: 'Announcements'
        }
      ]
    }
  }
}
</script>

<style>

</style>
