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
          </nav>
          <nav class="user-menu">
            <v-btn :href="href" text color="primary">{{ $t('common.header_'+text) }}</v-btn>
            <v-spacer
              v-if="isDesktop"
              class="vertical-divider"
            />
            <setting-menu />
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
import Settings from './TopNav/Settings'

export default {
  components: {
    'setting-menu': Settings,
    Logo
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
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },
  props: {
    text: {
      type: String,
      default: 'login'
    },
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>
