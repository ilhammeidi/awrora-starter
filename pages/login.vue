<template>
  <div class="main-wrap">
    <main-header text="register" href="/register" />
    <div class="space-top">
      <login-form />
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
import LoginForm from '@/components/Forms/Login';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    LoginForm,
  },
  head() {
    return {
      title: brand.starter.name + ' - Login',
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
