<template>
  <v-card class="mx-auto my-4 pa-4" width="80%" elevation="0">
    <div
      :class="{
        'd-flex flex-row justify-space-between align-center':largeDevice,
        '':smallDevice
      }"
    >
      <div
        :class="{
          'd-flex flex-row align-center':largeDevice
        }"
        :style="largeDevice?'width:70%':'width:100%'"
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
      <div style="width:20%">
        <div class="d-flex flex-row my-2">
          <div class="orange mx-2 px-3 py-2 caption rounded-circle">
            FB
          </div>
          <div class="orange mx-2 px-3 py-2 caption rounded-circle">
            IG
          </div>
        </div>
        <div class="d-flex flex-row my-2">
          <div class="orange mx-2 px-3 py-2 caption rounded-circle">
            FB
          </div>
          <div class="orange mx-2 px-3 py-2 caption rounded-circle">
            IG
          </div>
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
