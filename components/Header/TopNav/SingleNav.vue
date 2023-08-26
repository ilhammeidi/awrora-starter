<template>
  <div v-if="isDesktop" class="scrollactive-nav">
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in dataMenu"
        :key="index"
        :href="item.link"
        :class="{ active: activeMenu === item.name }"
        class="menu-link"
        @click="scrollToMyEl(item.name)"
        v-text="$t('starter.header_'+item.name)"
      />
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in dataMenu"
        :key="index"
        :href="'/' + item.link"
        v-text="$t('starter.header_'+item.name)"
      />
    </template>
    <v-btn href="/sample-pages" variant="text">
      {{ $t('common.header_sample_page') }}
    </v-btn>
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
    dataMenu: {
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
