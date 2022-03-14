<template>
  <v-card class="d-flex flex-row my-14" elevation="10">
    <div
      :class="{
        'd-flex flex-row align-center':largeDevice
      }"
    >
      <div class="pa-4">
        <v-img class="rounded-circle my-2" :src="'/images/directory/'+image" />
        <!-- <div class="d-flex mt-6">
          <v-icon class="green--text darken-3">
            mdi-whatsapp
          </v-icon>
          <p class="caption  my-0 mx-2">
            {{ whatsapp }}
          </p>
        </div> -->
        <!-- <div class="d-flex">
          <v-icon style="color:#E41A4A">
            mdi-email
          </v-icon>
          <p class="caption my-0  mx-2">
            {{ email }}
          </p>
        </div> -->
      </div>
      <div class="mx-2 my-4 d-flex flex-column">
        <p class="poppins-font">
          {{ name }}
        </p>
        <p class="title font-weight-bold">
          {{ company }}
        </p>
        <p class="body-2">
          Industry: {{ industry }}
        </p>
        <v-btn
          color="#E41A4A"
          outlined
          width="50%"
          class="poppins-font"
          @click="setInformation(
            {
              name: name,
              company: company,
              industry: industry,
              country: country,
              email: email,
              whatsapp: whatsapp,
              image: image
            }
          )"
        >
          connect
        </v-btn>
        <div class="mx-auto d-flex justify-space-between mt-4" style="width:80%">
          <div />
          <p class="caption my-2">
            Country: {{ country }}
          </p>
        </div>
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
    setInformation (object) {
      this.$store.commit('updateCompany', {
        name: object.name,
        company: object.company,
        industry: object.industry,
        country: object.country,
        email: object.email,
        whatsapp: object.whatsapp,
        image: object.image
      })
      this.$store.commit('updateDialog', true)
    }
  }
}
</script>

<style>

</style>
