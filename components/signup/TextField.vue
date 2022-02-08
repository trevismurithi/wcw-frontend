<template>
  <v-row class="mx-auto rounded" style="width:60%">
    <v-col class="pa-4">
      <p class="body-2">
        {{ firstLabel }}
      </p>
      <v-text-field
        outlined
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
  }
}
</script>

<style>

</style>
