<template>
  <v-sheet
    elevation="0"
    width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
      center-active
    >
      <v-slide-item
        v-for="(n,index) in category"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          elevation="0"
          class=" grey lighten-4 mx-4"
          width="350px"
          @click="toggle"
        >
          <v-img :src="'/images/story/'+n.image" />
          <v-overlay
            v-if="active"
            class="fill-height"
            align="center"
            justify="center"
            absolute
          >
            <v-scale-transition>
              <v-icon
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              />
            </v-scale-transition>
          </v-overlay>
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
  },
  data () {
    return {
      modol: true
    }
  }
}
</script>

<style>

</style>
