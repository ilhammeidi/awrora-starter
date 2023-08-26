<template>
  <div class="main-wrap">
    <main-header text="login" href="/login" />
    <div class="space-top">
      <register-form />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header/Basic';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/Forms/Register';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
  },
  head() {
    return {
      title: brand.starter.name + ' - Register',
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
};
</script>
