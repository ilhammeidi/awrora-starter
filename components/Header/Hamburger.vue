<template>
  <div>
    <v-app-bar
      v-scroll="handleScroll"
      :class="{ fixed: fixed, 'no-shadow': openDrawer }"
      class="header"
      fixed
      dense
      app
      height="auto"
    >
      <v-container>
        <div class="header-content">
          <nav class="nav-menu">
            <div class="hamburger-logo">
              <v-btn
                :class="{ 'is-active': openDrawer }"
                class="hamburger hamburger--spin mobile-menu"
                small
                icon
                @click.stop="handleToggleOpen"
              >
                <span class="hamburger-box">
                  <span class="bar hamburger-inner" />
                </span>
              </v-btn>
              <div class="logo center">
                <a href="#home">
                  <logo type="only" />
                </a>
              </div>
            </div>
            <user-menu />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="hamburger-nav">
          <scrollactive
            v-if="loaded"
            :offset="navOffset"
            active-class="active"
          >
            <ul class="menu">
              <li
                v-for="(item, index) in menuList"
                :key="index"
                :style="{ 'animation-duration': index * 0.15 + 's' }"
              >
                <v-btn
                  text
                  :href="item.link"
                  @click="setOffset(item.offset)"
                >
                  {{ $t('starter.header_'+item.name) }}
                </v-btn>
              </li>
            </ul>
          </scrollactive>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import Logo from '../Logo'
import UserMenu from './TopNav/UserMenu'
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
    UserMenu,
    Logo
  },
  data() {
    return {
      fixed: false,
      loaded: false,
      openDrawer: false,
      navOffset: 20,
      menuList: [
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
    setOffset: function(offset) {
      this.navOffset = offset
      this.openDrawer = false
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
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
