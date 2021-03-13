<template>
  <div class="form-comment">
    <div class="write">
      <v-avatar
        v-if="!isMobile"
        :size="36"
        class="avatar"
      >
        <img
          :src="avatar"
          alt="avatar"
        >
      </v-avatar>
      <v-text-field
        :placeholder="$t('common.blog_write')"
        outlined
        color="primary"
        single-line
      />
      <v-btn
        class="send-btn"
        elevation="0"
        color="primary"
      >
        {{ isMobile ? '' : $t('common.form_send') }}
        <v-icon v-if="isMobile">mdi-send</v-icon>
      </v-btn>
    </div>
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
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
