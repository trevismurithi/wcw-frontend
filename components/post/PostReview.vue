<template>
  <v-card class="my-4 pa-4" width="80%" elevation="0">
    <div
      :class="{
        'd-flex flex-row justify-space-between align-center':largeDevice
      }"
    >
      <div
        :class="{
          'd-flex flex-row align-center':largeDevice
        }"
      >
        <div class="mx-4" :style="smallDevice?'width:30%':'width:30%'">
          <v-img src="/images/post/writer.png" />
        </div>
        <div class="pa-4">
          <p class="title my-1">
            Mary Doe
          </p>
          <p class="caption grey--text  my-1">
            Mary Doe is a writer who has a lot of experience.
            She graduated from Duke university with a major in English literature.
          </p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style>

</style>
