<template>
  <v-list>
    <v-list-item href="#">
      <v-list-item-avatar>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-information-variant
          </v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="help-item">
          {{ $t('common.list_report') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item href="#">
      <v-list-item-avatar>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-help
          </v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="help-item">
          {{ $t('common.list_report') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item href="#">
      <v-list-item-avatar>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-disc
          </v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="help-item">
          {{ $t('common.list_opt') }} 1
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item href="#">
      <v-list-item-avatar>
        <v-avatar
          color="primary"
          size="24"
        >
          <v-icon dark>
            mdi-check
          </v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="help-item">
          {{ $t('common.list_opt') }} 2
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>
