<template>
    <v-form ref="form" @submit.prevent="submit">
        <!-- personal user information section -->
        <v-stepper-step :step="1" :complete="stage > 1">
        Personal information
        </v-stepper-step>
        <stepper-content :step="1">
        <v-card class="my-10" elevation="0">
            <!-- first name and last name field -->
            <v-row class="mx-auto rounded" style="width:100%">
                <v-col class="pa-4">
                <p class="body-2">
                    First Name
                </p>
                <v-text-field
                    outlined
                    v-model="firstName"
                    :style="largeDevice?'width:auto':'width:300px'"
                    label="Enter your first name"
                    :rules="nameRules"
                />
                </v-col>
                <v-col class="pa-4">
                <p class="body-2">
                    Last Name
                </p>
                <v-text-field
                    outlined
                    v-model="lastName"
                    label="Enter your last name"
                    :rules="nameRules"
                />
                </v-col>
            </v-row>
            <!-- whatsapp number and email address field -->
            <v-row class="mx-auto rounded" style="width:100%">
                <v-col class="pa-4">
                <p class="body-2">
                    Email Address
                </p>
                <v-text-field
                    outlined
                    v-model="email"
                    :style="largeDevice?'width:auto':'width:300px'"
                    label="Enter your email address"
                    :rules="emailRules"
                />
                </v-col>
                <v-col class="pa-4">
                <p class="body-2">
                    Whatsapp Phone Number
                </p>
                <v-text-field
                    outlined
                    v-model="phone"
                    label="Enter your whatsapp number"
                    :rules="phoneRules"
                />
                </v-col>
            </v-row>
            <!-- Company or Organization Name and business -->
            <v-row class="mx-auto rounded" style="width:100%">
                <v-col class="pa-4">
                <p class="body-2">
                    Company or Organisation Name
                </p>
                <v-text-field
                    outlined
                    v-model="company"
                    :style="largeDevice?'width:auto':'width:300px'"
                    label="Enter your email address"
                    :rules="nameRules"
                />
                </v-col>
                <v-col class="pa-4">
                <p class="body-2">
                    Your Business Street Address
                </p>
                <v-text-field
                    outlined
                    v-model="address"
                    label="Enter your whatsapp number"
                    :rules="addressRules"
                />
                </v-col>
            </v-row>
        </v-card>
        <v-btn color="blue darken-2 white--text" type="submit">
            next
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
      firstName: '',
      lastName: '',
      nameRules: [
          val => !!val || 'name is required',
          val => (val.length>3) || 'minimum 4 characters',
          val => (val.length<25) || 'max 24 characters'
      ],
      email: '',
      emailRules: [
          val => !!val || 'email is required',
          val => /.+@.+\..+/.test(val) || 'email has the wrong format'
      ],
      phone: '',
      phoneRules: [
          val => !!val || 'business is required'
      ],
      company: '',
      address: '',
      addressRules: [
          val => !!val || 'business address is required'
      ] 
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
              this.stage = 2
              this.$store.commit('application/updateFormOne', {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  phone: this.phone,
                  company: this.company,
                  street: this.address
              })
          }
      }
  }
}
</script>


<style>

</style>