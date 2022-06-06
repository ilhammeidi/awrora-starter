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
              <a href="#home">
                <logo type="landscape" />
              </a>
            </div>
            <div class="main-menu" v-if="loaded && isDesktop">
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
import Logo from '../Logo'
import UserMenu from './TopNav/UserMenu'
import SingleNav from './TopNav/SingleNav'
import MobileNav from './SideNav/SingleNavMobile'
import navMenu from './data/single'

let counter = 0
function createData(name, link, offset) {
  counter += 1
  return {
    id: counter,
    name,
    link,
    offset
  }
}

export default {
  components: {
    Logo,
    'mobile-menu': MobileNav,
    'header-menu': SingleNav,
    UserMenu
  },
  data() {
    return {
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40)
      ]
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
