<template>
  <v-row class="mx-auto my-14" style="width:80%">
    <v-col class="d-flex align-center justify-center">
      <v-card width="100%" elevation="0">
        <div class="py-4 rounded-lg" style="background-color:#E41A4A;">
          <p class="text-h4 font-weight-bold white--text px-4" style="width:80%">
            Ignite Accelerator Course (6-10 Months)
          </p>
        </div>
        <p class="text-h5 py-4">
          Blended Learning Digital Course
        </p>
        <v-sheet class="mb-4" width="90%" outlined color="#E41A4A" rounded="lg">
          <v-card class="pa-4" rounded="lg">
            <div class="text-center">
              <p class="font-weight-bold text-center text-h6">
                5 Modules
              </p>
            </div>
            <div class="mx-auto" style="width:60%">
              <p v-for="(text,index) in list" :key="index" class="my-0 body-2 font-weight-light">
                {{ index+1 }}. {{ text }}
              </p>
            </div>
          </v-card>
        </v-sheet>
        <v-btn class="mt-6" color="#E41A4A" outlined>
          Learn More
        </v-btn>
      </v-card>
    </v-col>
    <v-col class="d-flex justify-center">
      <div style="width:70%">
        <v-img src="/images/lady.png" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomeIgnite',
  data: () => {
    return {
      list: [
        'Personal mastery and leadership',
        'Demand & gearing for growth',
        'Scaling through systemization',
        'Winning markets',
        'know, find and grow your money'
      ]
    }
  }
}
</script>

<style>

</style>
