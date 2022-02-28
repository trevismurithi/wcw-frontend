<template>
  <div class="my-14 mx-auto" style="width:80%">
    <!-- <div class="my-10">
      <v-img src="/images/heart.svg" width="50px" />
    </div> -->
    <p class="text-h3 font-weight-medium text-center mx-auto" style="color:#FF374F;width:80%">
      400+ Women are loving the Women Creating Wealth Programme
    </p>
    <div class="d-flex justify-space-around">
      <v-card v-for="(user,index) in monials" :key="index" class="pa-6 rounded-lg" width="300px" outlined>
        <v-img class="rounded-circle" :src="'/images/'+ user.image" width="50px" height="50px" />
        <p class="body-2 my-4">
          {{ user.text }}
        </p>
        <p class="font-weight-bold">
          {{ user.name }}
        </p>
      </v-card>
    </div>
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
  }
}
</script>
