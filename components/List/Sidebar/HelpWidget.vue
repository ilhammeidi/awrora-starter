<template>
  <v-card class="help-paper text-center">
    <h3 class="text-h6 text-center">
      {{ $t('common.faq_luck') }}
    </h3>
    <v-card-subtitle class="mb-4">
      {{ $t('common.faq_luck_desc') }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn block variant="flat" color="primary">
        {{ $t('common.faq_luck_btn') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
@import '../list.scss';
</style>
