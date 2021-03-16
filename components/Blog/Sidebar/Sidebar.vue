<template>
  <div>
    <subscribe-widget />
    <div class="py-6" />
    <profile-widget />
    <div class="py-6" />
    <post-widget />
    <div class="py-6" />
    <comment-widget />
    <div class="py-6" />
    <list-widget />
    <div class="py-6" />
    <gallery-widget />
  </div>
</template>

<script>
import ProfileWidget from './ProfileWidget'
import SubscribeWidget from './SubscribeWidget'
import PostWidget from './PostWidget'
import CommentWidget from './CommentWidget'
import ListWidget from './ListWidget'
import GalleryWidget from './GalleryWidget'

export default {
  components: {
    SubscribeWidget,
    ProfileWidget,
    PostWidget,
    CommentWidget,
    ListWidget,
    GalleryWidget
  }
}
</script>
