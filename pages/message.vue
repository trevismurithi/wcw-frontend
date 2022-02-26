<template>
  <div>
    <v-card class="my-10" elevation="0">
      <text-field />
      <select-field />
      <text-field
        :first-entry="field.hints[0]"
        :second-entry="field.hints[1]"
        :first-label="field.labels[0]"
        :second-label="field.labels[1]"
      />
      <div class="mx-auto" style="width:80%">
        <contact-text-area class="mx-auto" />
      </div>
      <div class="mx-auto pa-2 text-center" style="width:60%">
        <v-btn elevation="0" color="#FF374F" class="white--text py-6" width="30%">
          send
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import TextField from '~/components/signup/TextField.vue'
import SelectField from '~/components/signup/SelectField.vue'
import ContactTextArea from '~/components/contact/ContactTextArea.vue'
export default {
  name: 'AppSignUp',
  components: { TextField, SelectField, ContactTextArea },
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
    }
  }
}
</script>

<style>

</style>
