<template>
  <v-list>
    <v-list-item href="#">
      <template #prepend>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-information-variant
          </v-icon>
        </v-avatar>
      </template>
      <div>
        <v-list-item-title class="help-item">
          {{ $t('common.list_report') }}
        </v-list-item-title>
      </div>
    </v-list-item>
    <v-list-item href="#">
      <template #prepend>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-help
          </v-icon>
        </v-avatar>
      </template>
      <div>
        <v-list-item-title class="help-item">
          {{ $t('common.list_report') }}
        </v-list-item-title>
      </div>
    </v-list-item>
    <v-list-item href="#">
      <template #prepend>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-disc
          </v-icon>
        </v-avatar>
      </template>
      <div>
        <v-list-item-title class="help-item">
          {{ $t('common.list_opt') }} 1
        </v-list-item-title>
      </div>
    </v-list-item>
    <v-list-item href="#">
      <template #prepend>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-check
          </v-icon>
        </v-avatar>
      </template>
      <div>
        <v-list-item-title class="help-item">
          {{ $t('common.list_opt') }} 2
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>
