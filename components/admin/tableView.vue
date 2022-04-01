<template>
        <v-data-table
        :loading="loading"
        class="mx-0" 
        :search="search"
        :custom-filter="filterOnlyCapsText"
        :headers="headers" 
        :items="items"
        >
        <template v-slot:top>
            <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
            ></v-text-field>
        </template>
        <template v-slot:item="row">
            <tr>
                <td class="d-block d-sm-table-cell">{{row.item.name}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.phone}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.temp}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.time}}</td>
                <td class="d-block d-sm-table-cell">
                    <!-- <v-btn 
                    @click="updateChild(row.item)"
                     class="blue darken-2 mx-auto">update</v-btn> -->
                     <v-menu offset-y>
                         <template v-slot:activator="{on, attr}">
                            <v-icon 
                            v-on="on"
                            v-bind="attr"
                            class="darken-2 mx-auto">
                            mdi-dots-vertical
                            </v-icon>
                         </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title @click.prevent="">
                                    admin
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title @click.prevent="">
                                    users
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                     </v-menu>
                </td>
            </tr>
        </template>
        </v-data-table>
</template>

<script>
export default {
    data () {
        return {
            search: '',
            loading: false,
            headers:[
                {
                    text:"Name",
                    value:"name",
                    sortable:true
                },
                {text:"Phone",value:"phone"},
                {text:"Temp(C)",value:"temp"},
                {text:"Date",value:"time"},
                {text:"Action",value:"none"},
            ],
            items: [
                {
                    name: 'user',
                    phone: '+254 73743474',
                    temp: '23',
                    time: '+GMT',
                }
            ]
        }
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
      },
    }

}
</script>

<style>

</style>