<template>
  <div class="search" :class="{ short: short}">
    <v-text-field
      :placeholder="$t('common.header_search')"
      outlined
      color="primary"
      single-line
    />
    <v-icon class="search-icon">mdi-magnify</v-icon>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false
    }
  }
}
</script>
