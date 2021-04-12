<template>
  <fragment>
    <page-nav v-if="type === 'nav'" />
    <chat v-if="type === 'chat'" />
  </fragment>
</template>

<script>
import PageNav from '../PageNav'
import Chat from '../Chat'

export default {
  components: {
    PageNav,
    Chat
  },
  computed: {
    type() {
      return this.$store.state.ui.corner
    }
  }
}
</script>
