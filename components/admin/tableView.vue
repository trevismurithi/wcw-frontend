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
                <td class="d-block d-sm-table-cell">{{row.item.firstname}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.lastname}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.email}}</td>
                <td class="d-block d-sm-table-cell">{{row.item.phone}}</td>
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
                        <v-list style="cursor:pointer">
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
    props: {
        items: {
            type: Array,
            default: () => [{
                    firstname: 'Samantha',
                    lastname: 'Jones',
                    email: 'samantha@jones.com',
                    phone: '+254 724455453',
            }]
        }
    },
    data () {
        return {
            search: '',
            loading: false,
            headers:[
                {
                    text:"First Name",
                    value:"firstname",
                    sortable:true
                },
                {text:"Last Name",value:"lastname"},
                {text:"Email",value:"email"},
                {text:"Phone",value:"phone"},
                {text:"Action",value:"none"},
            ],
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