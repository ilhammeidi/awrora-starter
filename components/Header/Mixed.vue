<template>
  <v-navigation-drawer
    v-if="isTablet"
    v-model="openNavMobile"
    fixed
    temporary
    class="mobile-nav"
  >
    <mobile-menu
      :menu-primary="menuPrimary"
      :menu-secondary="menuSecondary"
    />
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
            :class="{ 'is-active': openNavMobile }"
            class="hamburger hamburger--spin mobile-menu"
            icon
            small
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <a :href="link.starter.home">
              <logo type="landscape" />
            </a>
          </div>
          <div v-if="isDesktop" class="main-menu">
            <header-menu
              :menu-primary="menuPrimary"
              :menu-secondary="menuSecondary"
              :active-menu="activeMenu"
              :single-nav="home"
            />
          </div>
          <user-menu />
        </nav>
      </div>
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
import MixedNav from './TopNav/MixedNav';
import MixedMobile from './SideNav/MixedMobile';
import navMenu from './data/single';
import samplePages from './data/sample-pages';

let counter = 0;
function createData(name, href, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    link: href,
    offset,
  };
}

export default {
  components: {
    'header-menu': MixedNav,
    'mobile-menu': MixedMobile,
    UserMenu,
    Logo,
  },
  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      link,
      fixed: false,
      sections: {},
      activeMenu: '',
      openNavMobile: null,
      menuSecondary: samplePages,
      menuPrimary: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
      ],
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
    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
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
