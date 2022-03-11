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
    <v-card class="my-10" elevation="0">
      <text-field />
      <select-field />
      <text-field
        :first-entry="field.hints[0]"
        :second-entry="field.hints[1]"
        :first-label="field.labels[0]"
        :second-label="field.labels[1]"
      />
      <div class="mx-auto pa-2" :style="largeDevice?'width:60%':'width:100%'">
        <p class="body-2">
          I understand that if I have deliberately provided false information or fall to meet
          the basic terms of the programme, I will have to fortfeit my participation if I were
          to be selected(Please tick the box below to confirm)?
        </p>
        <v-checkbox
          v-model="selected"
          :value="true"
          label="I understand"
        />
      </div>
      <div class="mx-auto pa-2 text-center" :style="largeDevice?'width:60%':'width:100%'">
        <v-btn elevation="0" color="#FF374F" class="white--text py-6" :width="largeDevice?'30%':'80%'">
          Submit
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import TextField from '~/components/signup/TextField.vue'
import SelectField from '~/components/signup/SelectField.vue'
export default {
  name: 'AppSignUp',
  components: { TextField, SelectField },
  data: () => {
    return {
      condition: false,
      field: {
        labels: ['Email Address', 'Whatsapp Phone Number'],
        hints: ['Enter your email address', 'Enter your whatsapp number']
      }
    }
  },
  computed: {
    selected: {
      get () {
        return this.condition
      },
      set (value) {
        this.condition = value
      }
    },
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style>

</style>
