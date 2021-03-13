<template>
  <fragment>
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="root">
          <v-card class="paper">
            <v-row align="center" no-gutters>
              <v-col cols="12" md="9">
                <h4 class="display-1 pb-2">
                  {{ $t('common.about_ready') }}
                </h4>
                <p>
                  Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                </p>
              </v-col>
              <v-col cols="12" md="3">
                <v-row align="center">
                  <v-btn
                    large
                    outlined
                    color="secondary"
                    href="/contact"
                    class="button"
                  >
                    {{ $t('common.btn_contact') }}
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </fragment>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
export default {
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
