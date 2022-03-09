<template>
  <div class="my-14 mx-auto" style="width:80%">
    <!-- <div class="my-10">
      <v-img src="/images/heart.svg" width="50px" />
    </div> -->
    <p
      class="text-h3 font-weight-medium text-center mx-auto"
      :class="{
        'text-h5': $vuetify.breakpoint.smAndDown,
        'text-h3': $vuetify.breakpoint.mdAndUp,
      }"
      :style=" largeDevice ?'color:#FF374F;width:80%': 'color:#FF374F;width:100%'"
    >
      400+ Women are loving the Women Creating Wealth Programme
    </p>
    <v-row>
      <v-col v-for="(user,index) in monials" :key="index">
        <v-card class="pa-6 rounded-lg" width="300px" outlined>
          <v-img class="rounded-circle" :src="'/images/'+ user.image" width="50px" height="50px" />
          <p class="body-2 my-4">
            {{ user.text }}
          </p>
          <p class="font-weight-bold">
            {{ user.name }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AppTestimonials',
  data () {
    return {
      monials: [
        {
          image: 'testimony.svg',
          text: "The training and tools given by the experts who taught the various modules, culminated in'mock pitches' to investors.",
          name: '@acandajaswa'
        },
        {
          image: 'testimony-2.svg',
          text: 'After a few sessions I gained confidence in myself, especially knowing and acknowledging my business stage.',
          name: '@mmatloumabitsela'
        },
        {
          image: 'testimony-3.svg',
          text: 'I now know how to give praise when my staff have done things right. I also learnt how to Know, Find and Grow My Money.',
          name: '@dikonelomotseki'
        }
      ]
    }
  },
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
