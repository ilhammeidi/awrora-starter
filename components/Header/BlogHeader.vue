<template>
  <v-navigation-drawer
    v-if="isTablet"
    v-model="openNavMobile"
    fixed
    temporary
    class="mobile-nav"
  >
    <mobile-menu :data-menu="dataMenu" />
  </v-navigation-drawer>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed, 'open-side-nav': openNavMobile }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container>
      <div class="header-content">
        <nav class="nav-menu">
          <v-btn
            v-if="isTablet"
            text
            icon
            @click.stop="handleToggleOpen"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <div class="logo">
            <a :href="link.starter.home">
              <logo type="landscape" />
            </a>
          </div>
          <div v-if="loaded">
            <header-menu v-if="isDesktop" :data-menu="dataMenu" />
          </div>
        </nav>
        <nav>
          <hidden point="xsDown">
            <search-field short />
          </hidden>
          <v-spacer
            v-if="isDesktop"
            class="vertical-divider"
          />
          <setting-menu />
        </nav>
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
import Settings from './TopNav/Settings';
import SearchField from './TopNav/SearchField';
import MultiLevel from './TopNav/MultiLevel';
import MultiMobile from './SideNav/MultiMobile';
import Hidden from '../Hidden';
import blogMenu from './data/blog';

export default {
  components: {
    Logo,
    Hidden,
    'setting-menu': Settings,
    'mobile-menu': MultiMobile,
    'header-menu': MultiLevel,
    SearchField,
  },
  data() {
    return {
      link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: blogMenu,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
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
