<template>
  <v-container>
      <v-card class="mx-auto my-6 pa-4" :width="largeDevice?'50%':'100%'">
          <v-form ref="form" @submit.prevent="sendRequest">
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
                Email address
            </p>
            <v-text-field
                v-model="email"
                type="email"
                :rules="emailRules"
                outlined
                label="Enter your email address."
                color="#FF374F"
            />
            </div>
            <!-- login password -->
            <div class="mx-auto my-2" :style="largeDevice?'width:80%;':'width:100%;'">
                <v-btn class="white--text py-6" :color="rgbButton" width="100%" type="submit" :disabled="loading">
                    {{ message }}
                </v-btn>
            </div>
            <!-- signup navigation -->
            <div class="mx-auto my-2" :style="largeDevice?'width:80%;':'width:100%;'">
                <nuxt-link to="/login">login to account</nuxt-link>
            </div> 
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
            email: '',
            emailRules: [
                val => !!val || 'email is required',
                val => /.+@.+\..+/.test(val) || 'email has the wrong format'
            ],
       }
    },
  computed: {
    loading () {
        return this.$store.state.reset.loading
    },
    message () {
        return this.$store.state.reset.textLoader
    },
    rgbButton () {
        return this.$store.state.reset.rgbColorLoader
    },
    showErrorMessage () {
        return this.$store.state.reset.showErrorMessage
    },
    errorMessage () {
        return this.$store.state.reset.authErrorMessage
    },
    rgbColor () {
        return this.$store.state.reset.rgbColor
    },
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
      async sendRequest () {
          if (this.$refs.form.validate()) {
              //send email reset password
          }
      }
  }
}
</script>

<style>

</style>