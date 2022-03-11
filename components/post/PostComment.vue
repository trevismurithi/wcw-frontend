<template>
  <v-card elevation="0">
    <p
      class="font-weight-black text-center py-4 my-4"
      :class="{
        'text-h4':largeDevice,
        'text-h5':smallDevice
      }"
      style="color:#FF374F;"
    >
      Leave Comment
    </p>
    <div
      :class="{
        'd-flex flex-row justify-space-around':largeDevice
      }"
    >
      <div :style="largeDevice?'width:30%':'width:100%'">
        <p>
          First Name
        </p>
        <v-text-field
          type="text"
          outlined
          label="Enter your first name"
        />
      </div>
      <div :style="largeDevice?'width:30%':'width:100%'">
        <p>
          Last Name
        </p>
        <v-text-field
          type="text"
          outlined
          label="Enter your last name"
        />
      </div>
      <div :style="largeDevice?'width:30%':'width:100%'">
        <p>
          Your Email
        </p>
        <v-text-field
          type="text"
          outlined
          label="Enter your email address"
        />
      </div>
    </div>
    <div
      :class="{
        'mx-4':largeDevice,
      }"
    >
      <p>
        Message
      </p>
      <v-textarea
        outlined
        label="Enter your message"
      />
    </div>
    <div class="mx-auto" :style="largeDevice?'width:15%':'width:100%'">
      <v-btn width="100%" class="py-6 white--text" color="#FF374F">
        send
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
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
