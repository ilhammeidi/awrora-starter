<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      {{ $t('common.notif_msg') }}
    </div>
    <v-btn
      outlined
      color="white"
      class="button"
      @click="snackbar = false"
    >
      {{ $t('common.accept') }}
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
