<template>
    <v-form ref="form" @submit.prevent="submit">
        <!-- personal user information section -->
        <v-stepper-step :step="2" :complete="stage > 2">
          Business information
        </v-stepper-step>
        <stepper-content :step="2">
        <v-card class="my-10" elevation="0">
            <!-- Apartment, Suits, etc and City field -->
            <v-row class="mx-auto rounded" style="width:100%">
                <v-col class="pa-4">
                <p class="body-2">
                    Apartment, Suits, etc ...
                </p>
                <v-text-field
                    outlined
                    v-model="room"
                    :style="largeDevice?'width:auto':'width:300px'"
                    label="Enter your Apartment, Suits, etc"
                    :rules="fieldRules"
                />
                </v-col>
                <v-col class="pa-4">
                <p class="body-2">
                    City
                </p>
                <v-text-field
                    outlined
                    v-model="city"
                    label="Enter your city"
                    :rules="fieldRules"
                />
                </v-col>
            </v-row>
            <!-- State/Provinces ZIP/Postal Code field -->
            <v-row class="mx-auto rounded" style="width:100%">
                <v-col class="pa-4">
                <p class="body-2">
                    State/Provinces
                </p>
                <v-text-field
                    outlined
                    v-model="state"
                    :style="largeDevice?'width:auto':'width:300px'"
                    label="Enter your State/Provinces"
                    :rules="fieldRules"
                />
                </v-col>
                <v-col class="pa-4">
                <p class="body-2">
                    ZIP/Postal Code
                </p>
                <v-text-field
                    outlined
                    v-model="code"
                    label="Enter your ZIP/Postal Code"
                    :rules="fieldRules"
                />
                </v-col>
            </v-row>
        </v-card>
        <v-btn color="blue darken-2 white--text" type="submit">
            Submit
        </v-btn>
        </stepper-content>
    </v-form>
</template>

<script>
import StepperContent from '~/components/application/StepperContent.vue'
export default {
  name: 'FormOneApplication',
  components: { StepperContent },
  data () {
    return {
      room: '',
      fieldRules: [
          val => !!val || 'field is required'
      ],
      city: '',
      state: '',
      code: '',
    }
  },
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
  methods: {
      submit () {
          if (this.$refs.form.validate()) {
              this.$store.commit('application/updateFormTwo', {
                  room:  this.room,
                  city: this.city,
                  state: this.state,
                  code: this.code
              })
              console.log(this.$store.state.application.studentForm);
          }
      }
  }
}
</script>


<style>

</style>