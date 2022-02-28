<template>
  <v-card class="rounded-lg" width="300px" elevation="0">
    <div class="text-center rounded-lg my-2" style="border:2px solid #E41A4A;">
      <p class="pa-4 text-h6 my-0">
        {{ card[0].title }}
      </p>
    </div>
    <div class="rounded-lg" style="border:2px solid #E41A4A;height:80%">
      <div>
        <v-img :src="'/images/' + card[0].image" />
      </div>
      <div>
        <p class="body-2 grey--text pa-4">
          {{ card[0].context }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Array,
      default: () => [{
        image: 'com.png',
        title: 'Connect & Inspire',
        context: 'A network and inspiration platform to increase your network with' +
                           'other entrepreneurs in countries across Africa. Masterclasses Stories (e.g. JVs on RFPs, overcoming industry barriers)' +
                           'Networking / Collaboration Performance / Accountability.'
      }]
    }
  }
}
</script>

<style>

</style>
