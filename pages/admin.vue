<template>
  <v-card color="#FF374F">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 white--text">
        ADMIN
      </h1>
    </v-card-title>
    <!-- statistics section -->
    <div class="white pa-3 d-flex flex-row">
        <v-card elevation="5" class="ma-2 grey--text" v-for="index in 4" :key="index">
            <div class="d-flex flex-row pa-3">
                <v-icon>mdi-account</v-icon>
                <div class="d-flex flex-row" style="cursor:pointer">
                    <p class="mx-2 my-0 font-weight-bold title">Users:</p>
                    <p class="my-0 title font-weight-regular">200</p>
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
        <app-table-view />
      </v-tab-item>
      <v-tab-item>
        <app-table-view />
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
          'users', 'participants',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
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