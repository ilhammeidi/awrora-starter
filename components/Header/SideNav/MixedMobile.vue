<template>
  <v-list dense>
    <v-list-item
      v-for="(item, index) in menuPrimary"
      :key="index"
      :href="item.link"
      :class="{ current: curURL === (curOrigin+langPath+item.link)}"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('starter.header_'+item.name) }}
        </v-list-item-title>
      </div>
    </v-list-item>
    <v-list-group class="group-child">
      <template #activator="{props}">
        <v-list-item v-bind="props">
          <v-list-item-title class="menu-list">
            {{ $t('common.header_sample_page') }}
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-list
        v-for="(subitem, index) in menuSecondary"
        :key="index"
      >
        <v-list-subheader class="title-mega">
          {{ subitem.name }}
        </v-list-subheader>
        <div class="ms-3">
          <v-list-item
            v-for="(item, index) in subitem.child"
            :key="index"
            :href="item.link"
            :class="{ current: curURL === (curOrigin+langPath+item.link)}"
          >
            <div>
              <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
            </div>
          </v-list-item>
        </div>
      </v-list>
    </v-list-group>
  </v-list>
  <v-divider />
  <v-list dense>
    <v-list-item
      v-for="(item, index) in ['login', 'register']"
      :key="index"
      :href="'/' + item"
      :class="{ current: curURL === (curOrigin+langPath+item)}"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('common.header_'+item) }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
export default {
  props: {
    menuPrimary: {
      type: Array,
      required: true,
    },
    menuSecondary: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
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
};
</script>
