<template>
  <div class="search" :class="{ short: short}">
    <v-text-field
      :placeholder="$t('common.header_search')"
      variant="outlined"
      color="primary"
      single-line
      hide-details
    />
    <v-icon class="search-icon">
      mdi-magnify
    </v-icon>
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
      default: false,
    },
  },
};
</script>
