<template>
  <v-card
    class="pa-5"
    width="300px"
    elevation="5"
  >
    <v-btn
      class="font-weight-black text-h6"
      style="color:#FF374F"
      fab
    >
      {{ value }}
    </v-btn>
    <v-card-title
      class="font-weight-black my-2"
    >
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      default: 1,
      type: Number
    },
    title: {
      default: 'Step 1',
      type: String
    },
    body: {
      default: 'We will help to scale and make their business attractive to finacial institutions and investors.',
      type: String
    }
  }
}
</script>
