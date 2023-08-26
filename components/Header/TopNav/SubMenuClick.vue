<template>
  <v-menu
    v-if="menuItems.child"
    v-model="showMenu"
    location="end"
  >
    <template #activator="{ props }">
      <v-list-item v-bind="props">
        <v-list-item-title
          class="menu-list"
          v-text="menuItems.name"
        />
        <template #append>
          <v-icon color="grey lighten-1" class="arrow-icon">
            mdi-chevron-right
          </v-icon>
        </template>
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
      class="menu-list"
      v-text="menuItems.name"
    />
  </v-list-item>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  name: 'Submenu',
  props: {
    menuItems: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showMenu: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
    };
  },
  mounted() {
    this.curURL = window.location.href;
    this.curOrigin = window.location.origin;
    this.langPath = '/' + this.$i18n.locale;
  },
  methods: {
    handleClose() {
      this.showMenu = false;
    },
  },
};
</script>
