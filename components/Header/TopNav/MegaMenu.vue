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
        :position-x="0"
        max-height="480"
        offset-y
        content-class="mega-menu-root"
        min-width="100%"
        nudge-left
        nudge-width
      >
        <template #activator="{ attrs, on }">
          <span
            class="button-item"
            v-bind="attrs"
            v-on="on"
          >
            <v-btn text>
              {{ item.name }}
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu">
          <v-container class="max-md">
            <v-row>
              <v-col
                v-for="(subitem, index) in item.child"
                :key="index"
                sm="3"
              >
                <v-list>
                  <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
                  <img :src="subitem.thumb" alt="thumbnail" class="thumb-menu" />
                  <v-list-item-group>
                    <v-list-item
                      v-for="(item, index) in subitem.child"
                      :key="index"
                      :href="item.link"
                      :class="{ current: curURL === (curOrigin+langPath+item.link)}"
                    >
                      <v-list-item-content>
                        <v-list-item-title class="menu-list" v-text="item.name" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- Single Nav -->
      <v-btn
        v-else
        :href="item.link"
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
export default {
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
