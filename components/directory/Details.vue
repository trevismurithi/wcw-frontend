<template>
  <v-row justify="center">
    <v-dialog
      v-model="showDialog"
      width="500px"
      persistent
    >
      <v-card>
        <div>
          <div class="pa-2">
            <v-icon color="white--text red" @click="closeDialog">
              mdi-close
            </v-icon>
          </div>
          <div class="">
            <div>
              <div>
                <v-card-title class="font-weight-bold">
                  Company Name:
                </v-card-title>
                <v-card-text>{{ getCompany }}</v-card-text>
              </div>
              <div>
                <v-card-title class="font-weight-bold">
                  Contact Name:
                </v-card-title>
                <v-card-text>{{ getName }}</v-card-text>
              </div>
              <div>
                <v-card-title class="font-weight-bold">
                  Industry:
                </v-card-title>
                <v-card-text>{{ getIndustry }}</v-card-text>
              </div>
              <div>
                <v-card-title class="font-weight-bold">
                  Country:
                </v-card-title>
                <v-card-text>{{ getCountry }}</v-card-text>
              </div>
              <div>
                <v-card-title class="font-weight-bold">
                  Email Address:
                </v-card-title>
                <v-card-text>{{ getEmail }}</v-card-text>
              </div>
              <div>
                <v-card-title class="font-weight-bold">
                  WhatsApp Number:
                </v-card-title>
                <v-card-text>{{ getPhone }}</v-card-text>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'CompanyDetails',
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    showDialog () {
      return this.$store.state.dialog
    },
    getName () {
      return this.$store.state.name
    },
    getCompany () {
      return this.$store.state.company
    },
    getIndustry () {
      return this.$store.state.industry
    },
    getCountry () {
      return this.$store.state.country
    },
    getEmail () {
      return this.$store.state.email
    },
    getPhone () {
      return this.$store.state.whatsapp
    },
    getImage () {
      return this.$store.state.image
    }
  },
  methods: {
    closeDialog () {
      this.$store.commit('updateDialog', false)
    }
  }
}
</script>

<style>

</style>
