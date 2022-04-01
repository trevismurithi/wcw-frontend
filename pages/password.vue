<template>
  <v-container>
      <v-card class="mx-auto my-6 pa-4" :width="largeDevice?'50%':'100%'">
          <v-form ref="form" @submit.prevent="login">
            <!-- form error message -->
            <div 
                class="pa-1 my-4 mx-auto rounded-lg white--text text-center" 
                :class="rgbColor"
                style="width:80%"
                v-show="showErrorMessage"
            >
            <p class="mt-3">{{ errorMessage }}</p>
            </div>
            <!-- email address -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                New Password
            </p>
            <v-text-field
                v-model="password"
                type="password"
                :rules="passwordRules"
                outlined
                label="Enter your password"
                color="#FF374F"
            />
            </div>
            <!-- password field -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                Confirm Password
            </p>
            <v-text-field
                v-model="confirmPassword"
                type="password"
                :rules="[
                    val => !!val || 'password is required',
                    val => val === this.confirmPassword || 'password dont match'
                ]"
                outlined
                label="Confirm your password"
                color="#FF374F"
            />
            </div>
            <!-- login password -->
            <div class="mx-auto mb-4" :style="largeDevice?'width:80%;':'width:100%;'">
                <v-btn class="white--text py-6" :color="rgbButton" width="100%" type="submit" :disabled="loading">
                    {{ message }}
                </v-btn>
            </div>
            <!-- signup navigation -->
            <div class="mx-auto my-2" :style="largeDevice?'width:80%;':'width:100%;'">
                <nuxt-link to="/signUpUser">login account</nuxt-link>
            </div> 
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {

  data: () => {
    return {
            confirmPassword: '',
            password: '',
            passwordRules: [
                val => !!val || 'password is required',
                val => (val.length>7) || 'minimum characters 8',
                val => (val.length<25) || 'maximum characters 24' 
            ],
       }
    },
  computed: {
    loading () {
        return this.$store.state.password.loading
    },
    message () {
        return this.$store.state.password.textLoader
    },
    rgbButton () {
        return this.$store.state.password.rgbColorLoader
    },
    showErrorMessage () {
        return this.$store.state.password.showErrorMessage
    },
    errorMessage () {
        return this.$store.state.password.authErrorMessage
    },
    rgbColor () {
        return this.$store.state.password.rgbColor
    },
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
      async resetPassword () {
          if (this.$refs.form.validate()) {
              //reset password
              //redirect user to login
          }
      }
  }
}
</script>

<style>

</style>