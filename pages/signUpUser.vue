<template>
  <v-container>
      <v-card class="mx-auto my-6 pa-4" :width="largeDevice?'50%':'100%'">
          <v-form ref="form" @submit.prevent="register">
            <!-- first name field -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                Full Names
            </p>
            <v-text-field
                v-model="fullName"
                type="text"
                :rules="nameRules"
                outlined
                label="Enter your full name"
                color="#FF374F"
            />
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
            <!-- phone number field -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                Business Number
            </p>
            <v-text-field
                v-model="phone"
                type="number"
                :rules="phoneRules"
                outlined
                label="Enter your business number"
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
            <!-- confirm password field -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
            <p class="body-2 ml-1 font-weight-medium">
                Confirm Password
            </p>
            <v-text-field
                v-model="confirmPassword"
                type="password"
                :rules="[
                          val => !!val || 'password is required',
                          this.password == this.confirmPassword || 'password do not match']"
                outlined
                label="Confirm your password"
                color="#FF374F"
            />
            </div>
            <!-- login password -->
            <div class="mx-auto my-1" :style="largeDevice?'width:80%;':'width:100%;'">
                <v-btn class="white--text py-6" :color="rgbButton" width="100%" type="submit" :disabled="loading">
                    {{ message }}
                </v-btn>
            </div>
            <!-- login navigation -->
            <div class="mx-auto my-2" :style="largeDevice?'width:80%;':'width:100%;'">
                <nuxt-link to="/login">already have an account</nuxt-link>
            </div>   
            <!-- form error message -->
            <div 
                class="pa-1 my-4 mx-auto rounded-lg white--text text-center" 
                :class="rgbColor"
                style="width:80%"
                v-show="showErrorMessage"
            >
            <p class="mt-3">{{ errorMessage }}</p>
            </div>
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    middleware({app, store, redirect }) {
      // If the user is not authenticated
      if (!!app.$cookies.get(store.state.login.userAuth)) {
        return redirect('/')
      }
    },
  data: () => {
    return {
            fullName: 'test12',
            nameRules: [
                val => !!val || 'name is required',
                val => (val.length>3) || 'minimum 4 characters',
                val => (val.length<25) || 'max 24 characters'
            ],
            email: 'test13@gmail.com',
            emailRules: [
                val => !!val || 'email is required',
                val => /.+@.+\..+/.test(val) || 'email has the wrong format'
            ],
            phone: '393493493',
            phoneRules: [
                val => !!val || 'business is required'
            ],
            password: '123456',
            passwordRules: [
                val => !!val || 'password is required'
            ],
            confirmPassword: '123456',
       }
    },
  computed: {
    loading () {
        return this.$store.state.loading
    },
    message () {
        return this.$store.state.textLoader
    },
    rgbButton () {
        return this.$store.state.rgbColorLoader
    },
    showErrorMessage () {
        return this.$store.state.showErrorMessage
    },
    errorMessage () {
        return this.$store.state.authErrorMessage
    },
    rgbColor () {
        return this.$store.state.rgbColor;
    },
    loaderMessage: {
        get () {
            return this.message
        },
        set (val) {
            this.message = val
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
      ...mapMutations(['toggleButton']),
      async register () {
          if (this.$refs.form.validate()) {
                this.toggleButton({
                    color: 'blue darken-2',
                    text: 'please wait...'
                })
                await this.$store.dispatch('register',{
                    fullname: this.fullName,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                    status: false
                })
          }
      }
   }
}
</script>

<style>

</style>