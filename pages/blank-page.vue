<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <div class="space-top space-bottom">
        <h2 class="use-text-title text-center mb-4">
          {{ $t('common.title') }}
        </h2>
        <h4 class="use-text-subtitle2 text-center">
          {{ $t('common.subtitle') }}
        </h4>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.starter.name + ' - Blank page',
    };
  },
});
</script>
