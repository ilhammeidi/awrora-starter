<template>
  <div class="multi-menu">
    <template
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
        width="100%"
        transition="slide-y-transition"
        nudge-left
        nudge-width
      >
        <template #activator="{ props }">
          <span
            class="button-item"
            v-bind="props"
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
                  <v-list-subheader class="title-mega">
                    {{ subitem.name }}
                  </v-list-subheader>
                  <img :src="subitem.thumb" alt="thumbnail" class="thumb-menu">
                  <div>
                    <v-list-item
                      v-for="(item, index) in subitem.child"
                      :key="index"
                      :href="item.link"
                      :class="{ current: curURL === (curOrigin+langPath+item.link)}"
                    >
                      <div>
                        <v-list-item-title class="menu-list" v-text="item.name" />
                      </div>
                    </v-list-item>
                  </div>
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
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  props: {
    dataMenu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
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
