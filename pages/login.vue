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
                Email address
            </p>
            <v-text-field
                v-model="email"
                type="email"
                :rules="emailRules"
                outlined
                label="Enter your email address"
                color="#FF374F"
            />
            </div>
            <!-- password field -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                Password
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
            <!-- login password -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
                <v-btn class="white--text py-6" :color="rgbButton" width="100%" type="submit" :disabled="loading">
                    {{ message }}
                </v-btn>
            </div>
            <!-- signup navigation -->
            <div class="mx-auto my-2" :style="largeDevice?'width:80%;':'width:100%;'">
                <nuxt-link to="/signUpUser">I don't have an account</nuxt-link>
            </div> 
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {
    middleware({app, store, redirect }) {
      // If the user is not authenticated
      if (!!app.$cookies.get(store.state.login.userAuth)) {
        return redirect('/')
      }
    },
  data: () => {
    return {
            email: 'waweruisaac25@gmail.com',
            emailRules: [
                val => !!val || 'email is required',
                val => /.+@.+\..+/.test(val) || 'email has the wrong format'
            ],
            password: '12345678',
            passwordRules: [
                val => !!val || 'password is required'
            ],
       }
    },
  computed: {
    loading () {
        // if (!!this.$cookies.get(this.$store.state.login.userAuth)) {
        //    this.$router.push('/') 
        // }
        return this.$store.state.login.loading
    },
    message () {
        return this.$store.state.login.textLoader
    },
    rgbButton () {
        return this.$store.state.login.rgbColorLoader
    },
    showErrorMessage () {
        return this.$store.state.login.showErrorMessage
    },
    errorMessage () {
        return this.$store.state.login.authErrorMessage
    },
    rgbColor () {
        return this.$store.state.login.rgbColor
    },
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  methods: {
      async login () {
          if (this.$refs.form.validate()) {
                this.$store.commit('login/toggleButton',{
                    color: 'blue darken-2',
                    text: 'please wait...',
                    load: true
                })
                await this.$store.dispatch('login/login',{
                    email: this.email,
                    password: this.password
                })
          }
      }
  }
}
</script>

<style>

</style>