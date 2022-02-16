<template>
  <div class="my-14 mx-auto" style="width:80%">
    <v-card elevation="0">
      <v-card-text class="text-center mx-auto text-h4 font-weight-black my-5" style="width:50%; color:#FF374F;">
        How to start a business in 2022 - Complete Guide for Women
      </v-card-text>
    </v-card>
    <!-- image of two people -->
    <v-img src="/images/post/post.png" />
    <!-- author section -->
    <post-author />
    <!-- reviews section -->
    <div class="mx-auto" style="width:80%">
      <div class="d-flex flex-row">
        <!-- body of the reviews -->
        <div>
          <p class="px-8 text-h6 font-weight-medium">
            Reviews
          </p>
          <post-review v-for="i in 3" :key="i" />
        </div>
        <div>
          <p class="pr-10 body-1 font-weight-medium">
            Tags
          </p>
          <div v-for="i in 3" :key="i" class="my-4">
            <post-tag />
          </div>
          <!-- end of the chips -->
        </div>
      </div>
    </div>
    <!-- comment section -->
    <post-comment />
    <!-- recent posts section -->
    <div class="my-14">
      <div>
        <p class="text-center text-h4 font-weight-bold" style="color:#FF374F">
          Recent Post
        </p>
      </div>
      <v-row>
        <v-col v-for="i in 3" :key="i">
          <post-recent />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import PostAuthor from '~/components/post/PostAuthor.vue'
import PostComment from '~/components/post/PostComment.vue'
import PostRecent from '~/components/post/PostRecent.vue'
import PostReview from '~/components/post/PostReview.vue'
import PostTag from '~/components/post/PostTag.vue'
export default {
  name: 'AppSinglePost',
  components: { PostAuthor, PostTag, PostReview, PostComment, PostRecent }
}
</script>

<style>

</style>
