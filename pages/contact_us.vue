<template>
  <div class="mt-10">
    <div class="py-6 text-center mt-6">
      <p
        class="font-weight-medium"
        :class="{
          'text-h3':largeDevice,
          'text-h5':smallDevice
        }"
        style="color:#FF374F"
      >
        Contact Us
      </p>
    </div>
    <div
      :class="{
        'd-flex flex-row':largeDevice,
      }"
    >
      <!-- left side of the contact us page -->
      <div>
        <contact-location />
        <contact-location />
        <contact-location />
      </div>
      <!-- right side of the contact us page -->
      <div :style="largeDevice?'width:50%;':'width:100%;'">
        <contact-field />
        <contact-field label="Last Name" entry="Enter your last name" />
        <contact-field label="Your Email" entry="Enter your email" />
        <contact-text-area />
        <v-btn
          class="white--text py-4 poppins-font"
          color="#FF374F"
          :width="largeDevice?'20%':'50%'"
        >
          send
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ContactField from '~/components/contact/ContactField.vue'
import ContactLocation from '~/components/contact/ContactArea.vue'
import ContactTextArea from '~/components/contact/ContactTextArea.vue'
export default {
  name: 'AppContactUs',
  components: { ContactField, ContactLocation, ContactTextArea },
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
