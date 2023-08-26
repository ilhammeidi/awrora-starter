<template>
  <div class="comment-list">
    <v-list-item>
      <template #prepend>
        <v-avatar>
          <v-img :src="avatar" />
        </v-avatar>
      </template>
      <div>
        <v-list-item-title class="font-weight-bold">
          {{ name }}
        </v-list-item-title>
        <v-list-subheader class="date">
          {{ date }}
        </v-list-subheader>
        <p class="content">
          {{ comment }}
        </p>
      </div>
    </v-list-item>
    <v-divider v-if="!last" />
  </div>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>

<script>
import avatarDefault from '@/assets/images/avatars/pp_boy4.svg';

export default {
  props: {
    avatar: {
      type: String,
      default: avatarDefault,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    last: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
