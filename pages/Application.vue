<template>
  <v-stepper v-model="stage" vertical>
    <v-stepper-step :step="1" :complete="stage > 1">
      Compulsory
    </v-stepper-step>
    <stepper-content>
      <v-card class="my-10" elevation="0">
        <text-field />
        <select-field />
        <text-field
          :first-entry="field.hints[0]"
          :second-entry="field.hints[1]"
          :first-label="field.labels[0]"
          :second-label="field.labels[1]"
        />
      </v-card>
      <v-btn @click="stage=2">
        click
      </v-btn>
    </stepper-content>
  </v-stepper>
</template>

<script>
import TextField from '~/components/signup/TextField.vue'
import SelectField from '~/components/signup/SelectField.vue'
import StepperContent from '~/components/application/StepperContent.vue'
export default {
  name: 'HomeApplication',
  components: { TextField, SelectField, StepperContent },
  data () {
    return {
      stage: 1,
      field: {
        labels: ['Email Address', 'Whatsapp Phone Number'],
        hints: ['Enter your email address', 'Enter your whatsapp number']
      }
    }
  }
}
</script>

<style>

</style>
