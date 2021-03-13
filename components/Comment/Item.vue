<template>
  <div class="comment-list">
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="avatar" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">{{ name }}</v-list-item-title>
        <v-subheader class="date">{{ date }}</v-subheader>
        <v-list-item-subtitle class="content">{{ comment }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider v-if="!last" />
  </div>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>

<script>
import avatarDefault from '~/static/images/avatars/pp_boy4.svg'

export default {
  props: {
    avatar: {
      type: String,
      default: avatarDefault
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    last: {
      type: Boolean,
      default: false
    }
  }
}
</script>
