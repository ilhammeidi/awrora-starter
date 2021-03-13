<template>
  <fragment>
    <scrollactive
      v-if="isDesktop"
      :offset="navOffset"
      active-class="active"
      tag="div"
    >
      <v-btn
        v-for="(item, index) in dataMenu"
        :key="index"
        :href="item.link"
        class="anchor-link scrollactive-item"
        text
        @click="setOffset(item.offset)"
      >
        {{ $t('starter.header_'+item.name) }}
      </v-btn>
      <v-btn href="/sample-pages" text>
        {{ $t('common.header_sample_page') }}
      </v-btn>
    </scrollactive>
  </fragment>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  data() {
    return {
      navOffset: 20,
      hover: false
    }
  },
  methods: {
    setOffset: function(offset) {
      this.navOffset = offset
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },
  props: {
    dataMenu: {
      type: Array,
      required: true
    }
  }
}
</script>
