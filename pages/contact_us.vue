<template>
  <div class="mt-10">
    <div class="py-6 text-center mt-6">
      <p
        class="font-weight-medium"
        :class="{
          'text-h3':largeDevice,
          'text-h5':smallDevice
        }"
        style="color:#FF374F"
      >
        Contact Us
      </p>
    </div>
    <div
      :class="{
        'd-flex flex-row':largeDevice,
      }"
    >
      <!-- left side of the contact us page -->
      <div>
        <contact-location />
        <contact-location />
        <contact-location />
      </div>
      <!-- right side of the contact us page -->
      <v-form ref="form" @submit.prevent="contactUs" :style="largeDevice?'width:50%;':'width:100%;'">
        <!-- first name field -->
        <div :style="largeDevice?'width:80%;':'width:100%;'">
          <p class="body-2 ml-1 font-weight-medium">
            First Name
          </p>
          <v-text-field
            v-model="firstName"
            :rules="firstNameRules"
            outlined
            label="Enter your first name"
            color="#FF374F"
          />
        </div>
        <!-- last name field -->
        <div :style="largeDevice?'width:80%;':'width:100%;'">
          <p class="body-2 ml-1 font-weight-medium">
            Last Name
          </p>
          <v-text-field
            v-model="lastName"
            :rules="lastNameRules"
            outlined
            label="Enter your last name"
            color="#FF374F"
          />
        </div>
        <!-- email address field -->
        <div :style="largeDevice?'width:80%;':'width:100%;'">
          <p class="body-2 ml-1 font-weight-medium">
            Email Address
          </p>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            outlined
            label="Enter your email address"
            color="#FF374F"
          />
        </div>
        <!-- message field -->
        <div :style="largeDevice?'width:80%;':'width:100%;'">
          <p class="body-2 ml-1 font-weight-medium">
            Message
          </p>
          <v-textarea
            v-model="message"
            :rules="messageRules"
            outlined
            label="Enter your message"
            color="#FF374F"
          />
        </div>
        <v-btn
          class="white--text py-4 poppins-font"
          color="#FF374F"
          type="submit"
          :width="largeDevice?'20%':'50%'"
        >
          send
        </v-btn>
        <div 
            class="pa-1 mt-4 rounded-lg white--text text-center" 
            :class="rgbColor"
            style="width:80%"
            v-show="showErrorMessage"
          >
          <p class="mt-3">{{ errorMessage }}</p>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import ContactLocation from '~/components/contact/ContactArea.vue'
export default {
  name: 'AppContactUs',
  components: { ContactLocation },
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
      message: '',
      messageRules: [
        val => !!val || 'message is required',
        val => val.length>10 || 'not be less than 10 characters',
        val => val.length<60 || 'not greater than 60 characters'
      ],
      rgbColor: '',
      errorMessage: '',
      showErrorMessage: false
    }
  },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
    async contactUs () {
      if(this.$refs.form.validate()){
          try{
                await this.$axios.post('http://192.168.100.46:4000/details',{
                firstname: this.firstName,
                lastname: this.lastName,
                email: this.email,
                message: this.message
              })
              this.errorMessage = 'message sent successfully'
              this.rgbColor = 'green darken-2'
              this.showErrorMessage = true
              // empty all the string models
              this.firstName = ''
              this.lastName = ''
              this.email = ''
              this.message = ''
          }catch(error){
            this.errorMessage = 'request failed. Try again later'
            this.rgbColor = 'red darken-1'
            this.showErrorMessage = true
          }    
      }
    }
  }
}
</script>

<style>

</style>
