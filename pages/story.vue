<template>
  <div class="py-14">
    <div
      class="py-14 mx-auto"
      style="background-image:url('/images/story/background.png');background-size:contain;width:90%;"
    >
      <intro />
      <story-slider-group :category="categories" />
    </div>
    <div class="py-14">
      <story-image-left />
      <story-image-right />
      <story-image-left
        image="stage-3.png"
        title="ACCES TO FUNDING KNOWLEDGE"
        body="Access to funding is facilitated through financial wellness, pitching practices, investor showcasing and wealth management."
      />
    </div>
    <div class="mx-auto rounded-lg" style="background-color:#FF374F;width:80%">
      <div class="mx-auto pt-10 text-center" style="width:60%">
        <p class="white--text font-weight-medium text-h4">
          We have the support you are looking for
        </p>
        <p class="caption white--text">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterate approaches
          to corporate strategy faster collaborative thinking to further the overall value proposition.
        </p>
      </div>
      <div class="mx-auto" style="width:80%">
        <story-column />
      </div>
    </div>
    <div class="my-14">
      <div class="mx-auto pa-4" style="width:50%">
        <p class="text-h3 text-center font-weight-bold" style="color:#FF374F">
          Our Success Stories
        </p>
        <p class="body-2 font-weight-medium text-center">
          More than practical knowledge is required for business success.
          WCW aims to empower women in their personal and professional growth.
          Learn from the experience of our alumni.
        </p>
      </div>
      <story-article :category="categories" />
    </div>
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import StoryColumn from '~/components/story/StoryColumn.vue'
import StoryImageLeft from '~/components/story/StoryImageLeft.vue'
import StoryImageRight from '~/components/story/StoryImageRight.vue'
import StorySliderGroup from '~/components/story/StorySliderGroup.vue'
import StoryArticle from '~/components/story/StoryArticle.vue'
export default {
  name: 'AppStoryPage',
  components: { Intro, StorySliderGroup, StoryImageLeft, StoryImageRight, StoryColumn, StoryArticle },
  data () {
    return {
      categories: [
        {
          image: 'slide-2.png'
        },
        {
          image: 'slide.png'
        },
        {
          image: 'slide-3.png'
        }
      ]
    }
  }
}
</script>

<style>

</style>
