<template>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container>
      <div class="header-content">
        <nav class="nav-menu">
          <div class="logo start-mobile">
            <a :href="link.starter.home">
              <logo type="landscape" />
            </a>
          </div>
          <search-field v-if="!isMobile" />
        </nav>
        <user-menu />
      </div>
      <hidden point="smUp">
        <search-field />
      </hidden>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Logo from '../Logo';
import UserMenu from './TopNav/UserMenu';
import SearchField from './TopNav/SearchField';
import Hidden from '../Hidden';

export default {
  components: {
    Logo,
    Hidden,
    SearchField,
    UserMenu,
  },
  data() {
    return {
      link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openNavMobile = !this.openNavMobile;
    },
  },
};
</script>
