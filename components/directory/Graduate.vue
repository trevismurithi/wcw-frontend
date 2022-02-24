<template>
  <v-card class="d-flex flex-row my-14" style="background-color:#FF374F;" elevation="10">
    <div class="d-flex flex-row align-center">
      <div class="pa-4">
        <v-img :src="'/images/directory/'+image" />
        <div class="d-flex">
          <v-icon class="white--text">
            mdi-email
          </v-icon>
          <p class="caption white--text my-2 mx-2">
            {{ email }}
          </p>
        </div>
        <div class="d-flex">
          <v-icon class="white--text">
            mdi-whatsapp
          </v-icon>
          <p class="caption white--text my-2 mx-2">
            {{ whatsapp }}
          </p>
        </div>
        <p class="caption white--text my-2">
          Country: {{ country }}
        </p>
      </div>
      <div class="mx-2 my-4 d-flex flex-column">
        <p class="white--text title">
          {{ name }}
        </p>
        <p class="yellow--text title font-weight-black">
          {{ company }}
        </p>
        <p class="body-2 white--text">
          Industry: {{ industry }}
        </p>
        <v-btn color="yellow" outlined width="50%">
          connect
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'AppGraduate',
  props: {
    image: {
      type: String,
      default: 'graduate.svg'
    },
    name: {
      type: String,
      default: 'Leslie Alexander'
    },
    company: {
      type: String,
      default: 'Women Improvement Girls And Empowerment (wige Co Ltd)'
    },
    email: {
      type: String,
      default: 'businesswoman@wige.co'
    },
    whatsapp: {
      type: String,
      default: '+254 7xxxxxxxx'
    },
    industry: {
      type: String,
      default: 'Climate Change'
    },
    country: {
      type: String,
      default: 'Nigeria'
    },
    year: {
      type: String,
      default: '2021'
    }
  }
}
</script>

<style>

</style>
