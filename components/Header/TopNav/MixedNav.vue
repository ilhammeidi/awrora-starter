<template>
  <div
    v-if="isDesktop"
    class="scrollactive-nav"
  >
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="item.link"
        :class="{ active: activeMenu === item.name }"
        class="menu-link"
        variant="text"
        @click="scrollToMyEl(item.name)"
        v-text="$t('starter.header_'+item.name)"
      />
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.link"
        v-text="$t('starter.header_'+item.name)"
      />
    </template>
    <v-menu
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
            {{ $t('common.header_sample_page') }}
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
              v-for="(subitem, index) in menuSecondary"
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
                      <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
                    </div>
                  </v-list-item>
                </div>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { inject } from 'vue';
import { useRouter } from '#app';

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
    activeMenu: {
      type: String,
      required: true,
    },
    singleNav: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      hover: false,
      curURL: '',
      curOrigin: '',
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.curURL = window.location.href;
    this.curOrigin = window.location.origin;
    this.langPath = '/' + this.$i18n.locale;

    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }
  },
};
</script>
