<template>
  <fragment>
    <v-menu
      v-if="menuItems.child"
      offset-x
      v-model="showMenu"
    >
      <template #activator="{ attrs, on }">
        <v-list-item
          v-bind="attrs"
          v-on="on"
        >
          <v-list-item-title
            v-text="menuItems.name"
            class="menu-list"
          />
          <v-list-item-action>
            <v-icon color="grey lighten-1" class="arrow-icon">mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
      </template>
      <v-list class="rounded-menu">
        <!-- SubMenu -->
        <submenu
          v-for="(subitem, index) in menuItems.child"
          :key="index"
          :menu-items="subitem"
        />
      </v-list>
    </v-menu>
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
