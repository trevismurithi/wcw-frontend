<template>
  <div class="mt-10">
    <div class="py-6 text-center mt-6">
      <p class="text-h3 font-weight-medium" style="color:#FF374F">
        Contact Us
      </p>
    </div>
    <v-row>
      <!-- left side of the contact us page -->
      <v-col>
        <contact-location />
        <contact-location />
        <contact-location />
      </v-col>
      <!-- right side of the contact us page -->
      <v-col>
        <contact-field />
        <contact-field label="Last Name" entry="Enter your last name" />
        <contact-field label="Your Email" entry="Enter your email" />
        <contact-text-area />
        <v-btn class="white--text py-4 poppins-font" color="#FF374F" width="20%">
          send
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactField from '~/components/contact/ContactField.vue'
import ContactLocation from '~/components/contact/ContactArea.vue'
import ContactTextArea from '~/components/contact/ContactTextArea.vue'
export default {
  name: 'AppContactUs',
  components: { ContactField, ContactLocation, ContactTextArea }
}
</script>

<style>

</style>
