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
              <header-menu :data-menu="dataMenu" v-if="isDesktop"/>
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
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Logo from '../Logo'
import SearchField from './TopNav/SearchField'
import MultiLevel from './TopNav/MultiLevel'
import MultiMobile from './SideNav/MultiMobile'
import Hidden from '../Hidden'
import blogMenu from './data/blog'

export default {
  components: {
    Logo,
    Hidden,
    'mobile-menu': MultiMobile,
    'header-menu': MultiLevel,
    SearchField
  },
  data() {
    return {
      link: link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: blogMenu
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
