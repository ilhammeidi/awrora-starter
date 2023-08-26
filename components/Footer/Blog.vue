<template>
  <footer class="footer">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col
          class="pa-6"
          md="5"
          cols="12"
        >
          <logo type="landscape" />
          <p class="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div class="quick-links">
            <h6 class="title-nav mb-2">
              {{ $t('common.footer_link') }}
            </h6>
            <ul>
              <li
                v-for="(item, index) in footer.description"
                :key="item"
              >
                <nuxt-link :to="footer.link[index]">
                  {{ item }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col
          class="py-md-0 pa-6"
          md="4"
          cols="12"
        >
          <v-btn
            v-for="(item, index) in news"
            :key="index"
            variant="text"
            class="blog-item"
            href="#"
          >
            <span class="figure">
              <img :src="item.img" alt="thumb">
            </span>
            <span class="list-text">
              <span class="category">
                {{ $t('common.footer_news') }}
              </span>
              <span class="content">
                Sed imperdiet enim ligula vitae viverra.
              </span>
            </span>
          </v-btn>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="py-md-0 px-8 py-6"
        >
          <div class="socmed">
            <v-btn
              variant="text"
              icon
              size="small"
              class="button"
            >
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              size="small"
              class="button"
            >
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              size="small"
              class="button"
            >
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn
              variant="text"
              icon
              size="small"
              class="button"
            >
              <span class="ion-logo-linkedin icon" />
            </v-btn>
          </div>
          <v-select
            v-model="lang"
            :items="langList"
            :value="curLang"
            variant="outlined"
            class="select-lang"
            color="primary"
            prepend-inner-icon="mdi-web"
            @update:model-value="switchLang(lang)"
          />
          <p class="body-2">
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-blog';
</style>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSwitchLocalePath } from 'vue-i18n-routing';
import { setRtl } from '@/composables/uiTheme';
import brand from '@/assets/text/brand';
import img from '@/assets/images/imgAPI';
import Logo from '../Logo';
import { navigateTo } from '#app';

export default {
  components: {
    Logo,
  },
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    const i18n = useI18n();
    const curLang = i18n.locale.value;
    const lang = ref(curLang);

    function switchLang(locale) {
      navigateTo(switchLocalePath(locale));
      lang.value = locale;

      // Set RTL and Document attr
      document.documentElement.setAttribute('lang', locale);

      if (locale === 'ar') {
        setRtl(true);
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        setRtl(false);
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }

    return {
      curLang,
      switchLang,
      lang,
    };
  },
  data: () => ({
    brand,
    footer: {
      title: 'Quick Links',
      description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'], // eslint-disable-line
      link: ['#', '#', '#', '#', '#', '#'] // eslint-disable-line
    },
    news: [
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[4],
      },
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[1],
      },
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[3],
      },
    ],
  }),
  computed: {
    langList() {
      const list = [];
      const i18n = this.$i18n.locales;

      i18n.map((locale) => {
        list.push({ title: this.$t('common.' + locale.code), value: locale.code });
        return false;
      });
      return list;
    },
  },
};
</script>
