<template>
  <v-list class="side-multilv">
    <fragment
       v-for="(item, index) in dataMenu"
      :key="index"
    >
      <!-- Multilevel Nav -->
      <v-list-group
        v-if="item.child"
        no-action
        class="group-child"
      >
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <submenu-mobile
          v-for="(subitem, index) in item.child"
          :key="index"
          :menu-items="subitem"
        />
      </v-list-group>
      <!-- Single Nav -->
      <v-list-item
        v-else
        :href="item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
        link
      >
        <v-list-item-title class="menu-list">
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </fragment>
    <v-divider />
    <v-list-item
      v-for="(item, index) in ['login', 'register']"
      :key="index"
      :href="item"
      :class="{ current: curURL === (curOrigin+langPath+item)}"
      link
    >
      <v-list-item-content>
        <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import SubmenuMobile from './SubmenuMobile'

export default {
  components: {
    SubmenuMobile
  },
  data() {
    return {
      isOpen: false,
      curURL: '',
      curOrigin: '',
      langPath: ''
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  props: {
    dataMenu: {
      type: Array,
      required: true
    }
  }
}
</script>
