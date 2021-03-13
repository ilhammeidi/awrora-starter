<template>
  <section class="search-banner">
    <v-container class="max-md">
      <v-row align="center" class="search-block">
        <v-col sm="12">
          <h2 class="use-text-title2 text-center">
            {{ $t('common.list_title') }}
          </h2>
          <h3 class="use-text-subtitle2 text-center">
            {{ $t('common.list_subtitle') }}
          </h3>
          <div class="search">
            <v-text-field
              :placeholder="$t('common.list_search')"
              outlined
              color="primary"
              single-line
              :value="value"
              @input="(e) => updateValue(e)"
            />
            <v-icon class="search-icon">mdi-magnify</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>  
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
export default {
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
