<template>
  <fragment>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in dataMenu"
        :key="index"
        :href="item.link"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('starter.header_'+item.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="/sample-pages" link>
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('common.header_sample_page') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="(item, index) in ['login', 'register']"
        :key="index"
        :href="'/' + item"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import mega from '../data/mega'

export default {
  data() {
    return {
      menuList: mega,
      isOpen: false
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
