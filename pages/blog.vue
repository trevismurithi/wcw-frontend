<template>
  <div>
    <div class="my-6 mx-auto" style="width:90%">
      <p class="text-h4 ml-6 font-weight-medium my-4" style="color:#FF374F;">
        Featured Readings
      </p>
    </div>
    <div
      :class="{
        'my-6 mx-auto d-flex':largeDevice
      }"
      style="width:90%"
    >
      <blog-container />
      <blog-container image="image-2.png" />
      <blog-container image="image-3.png" />
    </div>
    <!-- explore in categories -->
    <div class="my-10 mx-auto" style="width:90%">
      <p
        class="ml-6 font-weight-medium my-4"
        :class="{
          'text-h4':largeDevice,
          'text-h5':smallDevice
        }"
        style="color:#FF374F;"
      >
        Explore in categories
      </p>
    </div>
    <!-- slide group for various categories -->
    <slider-group :category="categories" />
    <!-- our blog section -->
    <div class="my-6 mx-auto" style="width:90%">
      <p
        class="font-weight-bold my-4"
        :class="{
          'text-h4 ml-6':largeDevice,
          'text-h5':smallDevice
        }"
        style="color:#FF374F;"
      >
        Our Blogs
      </p>
    </div>
    <!-- part B of the blog section -->
    <div
      class="mx-auto"
      :class="{
        'd-flex flex-row':largeDevice,
        '':smallDevice
      }"
      :style="largeDevice?'width:90%':'width:100%'"
    >
      <div class="mx-2" :style="largeDevice?'width:45%':'width:100%'">
        <main-card />
      </div>
      <div class="mx-2" :style="largeDevice?'width:45%':'width:100%'">
        <blog-card />
        <blog-card image="blog-3.png" />
      </div>
    </div>
    <!-- other blogs for the page -->
    <div class="mx-auto my-10" style="width:90%">
      <div
        class="my-6"
        :class="{
          'd-flex':largeDevice
        }"
      >
        <blog-container image="other.png" />
        <blog-container image="other-2.png" />
        <blog-container image="other-3.png" />
      </div>
      <div
        class="my-6 mx-auto"
        :class="{
          'd-flex':largeDevice
        }"
      >
        <blog-container image="other-4.png" />
        <blog-container image="other-5.png" />
        <blog-container image="other-6.png" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/blog/BlogCard.vue'
import BlogContainer from '~/components/blog/BlogContainer.vue'
import MainCard from '~/components/blog/MainCard.vue'
import SliderGroup from '~/components/blog/SliderGroup.vue'
export default {
  name: 'AppBlog',
  components: { BlogContainer, SliderGroup, BlogCard, MainCard },
  data: () => {
    return {
      model: null,
      categories: [
        {
          image: 'category.png',
          state: 'Announcements'
        },
        {
          image: 'category-2.png',
          state: 'Business Directory'
        },
        {
          image: 'category-3.png',
          state: 'Updates'
        },
        {
          image: 'category-4.png',
          state: 'Events'
        },
        {
          image: 'category-5.png',
          state: '"How To", Talks'
        },
        {
          image: 'category.png',
          state: 'Announcements'
        },
        {
          image: 'category-2.png',
          state: 'Community'
        },
        {
          image: 'category-3.png',
          state: 'Updates'
        },
        {
          image: 'category-4.png',
          state: 'Events'
        },
        {
          image: 'category-5.png',
          state: 'Business Talks'
        }
      ]
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
