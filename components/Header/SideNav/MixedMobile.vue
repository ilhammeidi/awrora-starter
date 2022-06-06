<template>
  <fragment>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('starter.header_'+item.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group class="group-child">
        <template #activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('common.header_sample_page') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list
          v-for="(subitem, index) in menuSecondary"
          :key="index"
        >
          <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in subitem.child"
              :key="index"
              :href="item.link"
              :class="{ current: curURL === (curOrigin+langPath+item.link)}"
            >
              <v-list-item-content>
                <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
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
export default {
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
    menuPrimary: {
      type: Array,
      required: true
    },
    menuSecondary: {
      type: Array,
      required: true
    }
  }
}
</script>
