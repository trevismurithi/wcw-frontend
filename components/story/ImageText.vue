<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card class="mx-auto rounded-lg my-4" width="250">
        <v-img :src="'/images/story/' + image" />
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="black"
            class="d-flex align-end"
          >
            <div class="rounded-lg pa-4 ma-4">
              <p class="title">
                {{ title }}
              </p>
            </div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'support.png'
    },
    title: {
      type: String,
      default: 'Video Seminars'
    }
  }
}
</script>

<style>

</style>
