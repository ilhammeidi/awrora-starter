<template>
  <fragment>
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
            <div v-if="isDesktop && loaded">
              <header-menu :data-menu="dataMenu" />
            </div>
            <user-menu />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Logo from '../Logo'
import UserMenu from './TopNav/UserMenu'
import MegaMenu from './TopNav/MegaMenu'
import MegaMobile from './SideNav/MegaMobile'
import mega from './data/mega'

export default {
  components: {
    'mobile-menu': MegaMobile,
    'header-menu': MegaMenu,
    UserMenu,
    Logo
  },
  data() {
    return {
      link: link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: mega
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 100) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    handleToggleOpen: function() {
      this.openNavMobile = !this.openNavMobile
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
