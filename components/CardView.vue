<template>
  <div>
    <v-row class="my-6 mx-auto" :style="largeDevice?'width:70%':'width:100%'">
      <v-col>
        <div :style="largeDevice?'width:80%':'width:100%'">
          <p
            class="font-weight-medium"
            :class="{
              'text-h4':largeDevice,
              'text-h5':smallDevice
            }"
          >
            {{ heading }}
          </p>
          <p
            :class="{
              'caption':smallDevice
            }"
          >
            {{ context }}
          </p>
        </div>
        <v-card
          class="mx-auto pa-2"
          :width="largeDevice?'90%':'100%'"
          elevation="0"
        >
          <!-- first section -->
          <div class="d-flex flex-row">
            <v-img src="/images/icon-2.svg" width="60px" height="60px" />
            <div class="mx-4">
              <p class="text-subtitle font-weight-bold">
                {{ subH }}
              </p>
              <p
                :class="{
                  'text-body-2':largeDevice,
                  'caption':smallDevice
                }"
              >
                {{ subC }}
              </p>
            </div>
          </div>
          <!-- second section -->
          <div class="d-flex flex-row">
            <v-img src="/images/icon-3.svg" width="60px" height="60px" />
            <div class="mx-4">
              <p class="text-subtitle font-weight-bold">
                {{ subH2 }}
              </p>
              <p
                :class="{
                  'text-body-2':largeDevice,
                  'caption':smallDevice
                }"
              >
                {{ subC2 }}
              </p>
            </div>
          </div>
          <!-- third section -->
          <div class="d-flex flex-row">
            <v-img src="/images/icon.svg" width="60px" height="60px" />
            <div class="mx-4">
              <p class="text-subtitle font-weight-bold">
                {{ subH3 }}
              </p>
              <p
                :class="{
                  'text-body-2':largeDevice,
                  'caption':smallDevice
                }"
              >
                {{ subC3 }}
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col style="width:50%">
        <v-img :src="'/images/'+image" width="100%" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AppCardView',
  props: {
    image: {
      type: String,
      default: 'image.png'
    },
    heading: {
      type: String,
      default: 'Connect & Inspire'
    },
    context: {
      type: String,
      default: 'A network and inspiration platform to icrease the connection of entrepreneurs in countries across regions in Africa.'
    },
    subH: {
      type: String,
      default: 'Connect With Inspiring Peoples'
    },
    subH2: {
      type: String,
      default: 'Engage in Community Discussions'
    },
    subH3: {
      type: String,
      default: 'Attend Our Virtual Events'
    },
    subC: {
      type: String,
      default: "Personal introductions are far more valuable than cold calls. Let's put in touch with people you're looking for."
    },
    subC2: {
      type: String,
      default: 'Meet and converse with a broad spectrum of people for personal and business development.'
    },
    subC3: {
      type: String,
      default: 'Get ample opportunities for networking, thought leadership, and innovation, and potential to elevate you.'
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
