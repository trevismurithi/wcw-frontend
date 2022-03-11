<template>
  <v-row class="mx-auto rounded" :style="largeDevice?'width:60%':'width:100%'">
    <v-col class="pa-4">
      <p class="body-2">
        {{ firstLabel }}
      </p>
      <v-text-field
        outlined
        :style="largeDevice?'width:auto':'width:300px'"
        :label="firstEntry"
      />
    </v-col>
    <v-col class="pa-4">
      <p class="body-2">
        {{ secondLabel }}
      </p>
      <v-text-field
        outlined
        :label="secondEntry"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    firstLabel: {
      type: String,
      default: 'First Name'
    },
    secondLabel: {
      type: String,
      default: 'last Name'
    },
    firstEntry: {
      type: String,
      default: 'Enter your first name'
    },
    secondEntry: {
      type: String,
      default: 'Enter your last name'
    }
  },
  computed: {
    smallDevice () {
      return this.$vuetify.breakpoint.smAndDown
    },
    largeDevice () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style>

</style>
