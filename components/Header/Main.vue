<template>
  <div>
    <mixed v-if="type === 'mixed'" :home="home" />
    <basic v-if="type === 'basic'" />
    <drop-list v-if="type === 'droplist'" />
    <mega v-if="type === 'mega'" />
    <hamburger v-if="type === 'hamburger'" />
    <nav-scroll v-if="type === 'navscroll'" :home="home" />
    <search-bar v-if="type === 'search'" />
  </div>
</template>

<script>
import Mixed from './Mixed'
import Basic from './Basic'
import DropList from './DropList'
import Mega from './Mega'
import Hamburger from './Hamburger'
import NavScroll from './NavScroll'
import SearchBar from './Search'

export default {
  components: {
    Mixed,
    Basic,
    DropList,
    Mega,
    Hamburger,
    NavScroll,
    SearchBar
  },
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type() {
      return this.$store.state.ui.header
    }
  }
}
</script>
