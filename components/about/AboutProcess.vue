<template>
  <v-row class="mx-auto my-10" style="width:80%">
    <v-col>
      <p class="text-h3 font-weight-medium">
        Our Process
      </p>
      <div v-for="(step,index) in steps" :key="index">
        <p class="font-weight-bold title">
          {{ step.name }}
        </p>
        <p class="font-weight-light body-2">
          {{ step.content }}
        </p>
      </div>
      <div class="my-4">
        <v-btn class="white--text my-4" color="#FF374F">
          Learn more
        </v-btn>
        <p class="font-weight-light body-2 my-2">
          Learn more about the Graca Machel Trust here.
        </p>
      </div>
    </v-col>
    <v-col class=" d-flex justify-center">
      <div class="" style="width:70%">
        <v-img src="/images/about/woman-2.png" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        {
          name: 'Step 1:',
          content: 'We strengthen the skills and confidence of women entrepreneurs in order to address their business challenges.'
        },
        {
          name: 'Step 2:',
          content: 'The entrepreneurs are then able to scale their business from income generation to wealth creation.'
        },
        {
          name: 'Step 3:',
          content: 'We support entrepreneurs in becoming business leaders who will represent women in key decision-making' +
                    'platforms, influencing greater access to markets and finance for women across Africa.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
