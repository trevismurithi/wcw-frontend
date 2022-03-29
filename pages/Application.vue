<template>
<div>
    <v-card elevation="0">
      <v-card-text
        class="text-center mx-auto text-h4 font-weight-medium"
        :class="{
          'text-h4':largeDevice,
          'text-h5':smallDevice
        }"
        :style="largeDevice?'width:55%; color:#FF374F;':'width:100%; color:#FF374F;'"
      >
        We'll keep your information on file and contact you when new opportunities or calls for applications arise.
      </v-card-text>
      <v-card-text class="text-center mx-auto" :style="largeDevice?'width:45%;':'width:100%;'">
        Making time for personal growth is an investment in both yourself
        and your business.
        Let's help you spend your days pursuing your goals and running a successful business.
      </v-card-text>
    </v-card>
    <v-stepper 
      v-model="stage" 
      vertical 
      elevation="8"
      class="mx-auto mt-6"
      :width="largeDevice?'80%':'100%'"
      >
      <form-one />
      <form-two />
    </v-stepper>
</div>
</template>

<script>
import StepperContent from '~/components/application/StepperContent.vue'
import FormOne from '~/components/application/FormOne.vue'
import FormTwo from '~/components/application/FormTwo.vue'

export default {
  name: 'HomeApplication',
  components: { StepperContent, FormOne, FormTwo },
  computed: {
    stage : {
        get () {
            return this.$store.state.application.stage
        },
        set (val) {
            this.$store.commit('application/updateStage',val)
        }
    },
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
}
</script>

<style>

</style>
