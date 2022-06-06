<template>
  <fragment>
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
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Logo from '../Logo'
import UserMenu from './TopNav/UserMenu'
import SearchField from './TopNav/SearchField'
import Hidden from '../Hidden'

export default {
  components: {
    Logo,
    Hidden,
    SearchField,
    UserMenu
  },
  data() {
    return {
      link: link,
      fixed: false,
      loaded: false,
      openNavMobile: null
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
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    },
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
