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
    <v-form ref="form" @submit.prevent="signUp" class="my-10" elevation="0">
      <!-- first name and last name field -->
      <v-row class="mx-auto rounded" :style="largeDevice?'width:60%':'width:100%'">
        <v-col class="pa-4">
          <p class="body-2">
            First Name
          </p>
          <v-text-field
            outlined
            v-model="firstName"
            :style="largeDevice?'width:auto':'width:300px'"
            label="Enter your first name"
            :rules="firstNameRules"
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
            :rules="lastNameRules"
          />
        </v-col>
      </v-row>
      <!-- select field -->
      <v-row class="mx-auto rounded" :style="largeDevice?'width:60%':'width:100%'">
        <v-col class="pa-4">
          <p class="body-2">
            Country
          </p>
          <v-select
            :style="largeDevice?'width:auto':'width:300px'"
            label="Select your country"
            outlined
            v-model="country"
            :items="countries"
            :rules="countryRules"
          />
        </v-col>
        <v-col class="pa-4">
          <p class="body-2">
            Sector
          </p>
          <v-select
            :style="largeDevice?'width:auto':'width:300px'"
            label="Select your sector"
            outlined
            v-model="sector"
            :items="items"
            :rules="sectorRules"
          />
        </v-col>
      </v-row>
      <v-row class="mx-auto rounded" :style="largeDevice?'width:60%':'width:100%'">
        <v-col class="pa-4">
          <p class="body-2">
            {{ field.labels[0] }}
          </p>
          <v-text-field
            outlined
            :style="largeDevice?'width:auto':'width:300px'"
            :label="field.hints[0]"
            v-model="email"
            :rules="emailRules"
          />
        </v-col>
        <v-col class="pa-4">
          <p class="body-2">
            {{ field.labels[1] }}
          </p>
          <v-text-field
            outlined
            :label="field.hints[1]"
            v-model="phone"
            :rules="phoneRules"
          />
        </v-col>
      </v-row>
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
        <v-btn type="submit" elevation="0" color="#FF374F" class="white--text py-6" :width="largeDevice?'30%':'80%'">
          Submit
        </v-btn>
        <div 
            class="pa-1 mt-4 rounded-lg white--text text-center" 
            :class="rgbColor"
            style="width:100%"
            v-show="showErrorMessage"
          >
          <p class="mt-3">{{ errorMessage }}</p>
        </div>
      </div>
    </v-form>
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
      firstName: '',
      firstNameRules: [
        val => !!val || 'name is required',
        val => val.length>3 || 'character not less than 3',
        val => val.length<25 || 'character not more than 25'
      ],
      lastName: '',
      lastNameRules: [
        val => !!val || 'name is required',
        val => val.length>3 || 'character not less than 3',
        val => val.length<25 || 'character not more than 25'
      ],
      email: '',
      emailRules: [
        val => !!val || 'email is required',
        val => /.+@.+\..+/.test(val) || 'email has the wrong format'
      ],
      country: '',
      countryRules: [
        val => !!val || 'country is required',
      ],
      sector: '',
      sectorRules: [
        val => !!val || 'sector is required',
      ],
      phone: '',
      phoneRules: [
        val => !!val || 'sector is required',
      ],
      condition: false,
      items: ['Health Care', 'Construction', 'Banking', 'Interior Design'],
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Zanzibar', 'South Africa'],
      field: {
        labels: ['Email Address', 'Whatsapp Phone Number'],
        hints: ['Enter your email address', 'Enter your whatsapp number']
      },
      rgbColor: '',
      errorMessage: '',
      showErrorMessage: false
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
  },
  methods: {
    async signUp () {
      if(this.condition){
        if(this.$refs.form.validate()){
            try{
                await this.$axios.post('http://192.168.100.46:4000/userdetails',{
                  firstname: this.firstName,
                  lastname: this.lastName,
                  country: this.country,
                  sector: this.sector,
                  email: this.email,
                  phone: this.phone
                })
                this.errorMessage = 'message sent successfully'
                this.rgbColor = 'green darken-2'
                this.showErrorMessage = true
                // reset the field
                this.firstName = ''
                this.lastName = ''
                this.country = ''
                this.sector = ''
                this.email = ''
                this.phone = ''
            }catch(error){
                  this.errorMessage = 'request failed. Try again later'
                  this.rgbColor = 'red darken-1'
                  this.showErrorMessage = true
            }
        }
      }else{
          this.errorMessage = 'agree to the terms and conditions'
          this.rgbColor = 'red darken-1'
          this.showErrorMessage = true
      }
    }
  }
}
</script>

<style>

</style>
