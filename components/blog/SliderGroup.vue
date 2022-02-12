<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    width="90%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
      >
        <v-card
          elevation="0"
          class="ma-4"
          height="200"
          width="150"
        >
          <v-img src="/images/blog/category.png" />
          <p class="body-2 font-weight-black text-center my-2" style="color:#FF374F;">
            Announcements
          </p>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {

}
</script>

<style>

</style>
