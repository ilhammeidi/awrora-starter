<template>
  <div class="multi-menu">
    <fragment
      v-for="(item, index) in dataMenu"
      :key="index"
    >
      <!-- Multilevel Nav -->
      <v-menu
        v-if="item.child"
        :open-on-hover="hover"
        offset-y
        class="wrap-menu"
      >
        <template #activator="{ attrs, on }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
          >
            {{ item.name }}
            <v-icon right>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list class="rounded-menu">
          <!-- SubMenu -->
          <submenu
            v-for="(subitem, index) in item.child"
            :key="index"
            :menu-items="subitem"
          />
        </v-list>
      </v-menu>
      <!-- Single Nav -->
      <v-btn
        v-else
        :href="item.link || '#'"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
        text
      >
        {{ item.name }}
      </v-btn>
    </fragment>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import Submenu from './SubMenuClick'
// import Submenu from './SubMenuHover'

export default {
  components: {
    Submenu
  },
  data() {
    return {
      hover: false,
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
