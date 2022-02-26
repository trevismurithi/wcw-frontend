<template>
  <div>
    <div class="py-6 text-center mx-auto rounded my-6" style="background-color:#E41A4A;width:30%">
      <p class="text-h5 white--text font-weight-bold my-0">
        Business Community (3 Years)
      </p>
    </div>
    <v-row class="mx-auto" style="width:80%">
      <v-col class="d-flex justify-center">
        <home-community-card />
      </v-col>
      <v-col class="d-flex justify-center">
        <home-community-card />
      </v-col>
      <v-col class="d-flex justify-center">
        <home-community-card />
      </v-col>
    </v-row>
    <div class="mx-auto my-2" style="width:fit-content">
      <v-btn class="mt-6" color="#E41A4A" outlined>
        Learn More
      </v-btn>
    </div>
  </div>
</template>

<script>
import HomeCommunityCard from './HomeCommunityCard.vue'
export default {
  components: { HomeCommunityCard },
  data () {
    return {
      market: [
        {
          image: 'com-2.png',
          title: 'Market Access & Readiness',
          context: 'A platform that facilitates market access through a business directory,' +
           'market champions who highlight opportunities and industry engagements.' +
           'In addition it increases your brand visibility.'
        }
      ],
      finance: [
        {
          image: 'com-3.png',
          title: 'Finance Access & Readiness',
          context: 'A knowledge platform that offers financial wellness, pitching practices, investor ' +
                    'showcasing and wealth management coaching.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
