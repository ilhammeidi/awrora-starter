<template>
  <fragment>
    <div class="parent-hover" v-if="menuItems.child">
      <v-list-item link>
        <v-list-item-title
          v-text="menuItems.name"
          class="menu-list"
        />
        <v-list-item-action>
          <v-icon color="grey lighten-1" class="arrow-icon">mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list class="submenu-hover">
        <!-- SubMenu -->
        <v-card elevation="4">
          <submenu
            v-for="(subitem, index) in menuItems.child"
            :key="index"
            :menu-items="subitem"
          />
        </v-card>
      </v-list>
    </div>
    <v-list-item
      v-else 
      :href="menuItems.link || '#'"
      :class="{ current: curURL === (curOrigin+langPath+menuItems.link)}"
      @click="handleClose()"
    >
      <v-list-item-title
        v-text="menuItems.name"
        class="menu-list"
      />
    </v-list-item>
  </fragment>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  name: 'Submenu',
  data() {
    return {
      showMenu: false,
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
    menuItems: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClose() {
      this.showMenu = false
    }
  }
}
</script>
