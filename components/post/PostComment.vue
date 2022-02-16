<template>
  <v-card elevation="0">
    <p class="text-h4 font-weight-black text-center py-4 my-4" style="color:#FF374F;">
      Leave Comment
    </p>
    <div class="d-flex flex-row justify-space-around">
      <div style="width:30%">
        <p>
          First Name
        </p>
        <v-text-field
          type="text"
          outlined
          label="Enter your first name"
        />
      </div>
      <div style="width:30%">
        <p>
          Last Name
        </p>
        <v-text-field
          type="text"
          outlined
          label="Enter your last name"
        />
      </div>
      <div style="width:30%">
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
    <div class="mx-4">
      <p>
        Message
      </p>
      <v-textarea
        outlined
        label="Enter your message"
      />
    </div>
    <div class="mx-auto" style="width:15%">
      <v-btn width="100%" class="py-6 white--text" color="#FF374F">
        send
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
