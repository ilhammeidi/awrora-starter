<template>
  <paper
    :title="$t('common.blog_subscribe')"
    :subtitle="$t('common.blog_subscribe_desc')"
    icon="mdi-wifi"
    color
  >
    <div>
      <div class="form">
        <v-text-field
          :label="$t('common.register_email')"
          class="input"
          dark
        />
        <v-btn
          class="send"
          small
          outlined
          color="white"
        >
          {{ $t('common.btn_submit') }}
        </v-btn>
      </div>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../blog-style.scss';
</style>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  }
}
</script>
