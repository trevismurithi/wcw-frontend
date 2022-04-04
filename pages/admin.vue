<template>
  <v-card color="#FF374F" class="mt-14">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 white--text">
        ADMIN
      </h1>
    </v-card-title>
    <!-- statistics section -->
    <div class="white pa-3 d-flex flex-row">
        <v-card elevation="5" class="ma-2 grey--text" v-for="(header, index) in statistics" :key="index">
            <div class="d-flex flex-row pa-3">
                <v-icon :class="header.color" >mdi-account</v-icon>
                <div class="d-flex flex-row align-center" style="cursor:pointer">
                    <p 
                      class="mx-2 my-0 font-weight-bold body-1"
                      :class="header.color" 
                    >
                      {{ header.name }}
                    </p>
                    <p 
                      class="my-0 body-2 font-weight-bold"
                    >
                      {{ numberWithCommas(header.value) }}
                    </p>
                </div>
            </div>
        </v-card>
    </div>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="grey darken-4"
      grow
    >
      <v-tab
        class="white--text grey darken-2"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <!-- first table -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <app-table-view :items="users" />
      </v-tab-item>
      <v-tab-item>
        <app-table-view :items="participants" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import AppTableView from '~/components/admin/tableView.vue'
export default {
    layout: 'portal',
    components: { AppTableView },
    data () {
      return {
        tab: null,
        items: [
          'users', 'students',
        ],
        statistics: [
          {
            name: 'Users',
            value: 6000,
            color: 'red--text'
          },
          {
            name: 'Students',
            value: 1245,
            color: 'red--text'
          },
          {
            name: 'Graduates',
            value: 500,
            color: 'red--text'
          },
          {
            name: 'Admins',
            value: 10,
            color: 'red--text'
          },
        ],
        users: [
          {
                    firstname: 'Samantha',
                    lastname: 'Jones',
                    email: 'samantha@jones.com',
                    phone: '+254 724455453',
          }
        ],
        participants: [
          {
                    firstname: 'Joseph',
                    lastname: 'Jones',
                    email: 'joseph@jones.com',
                    phone: '+254 724455453',
          }
        ]
      }
    },
    methods: {
      numberWithCommas (value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    }
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>