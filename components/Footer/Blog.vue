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
            text     
            class="blog-item"
            href="#"
          >
            <span class="figure">
              <img :src="item.img" alt="thumb" />
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
              text
              icon
              class="button"
            >
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn
              text
              icon
              class="button"
            >
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn
              text
              icon
              class="button"
            >
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn
              text
              icon
              class="button"
            >
              <span class="ion-logo-linkedin icon" />
            </v-btn>
          </div>
          <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
            @change="switchLang(lang)"
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
import img from '~/static/images/imgAPI'
import brand from '~/static/text/brand'
import Logo from '../Logo'

export default {
  components: {
    Logo
  },
  data: () => ({
    lang: 'en',
    brand: brand,
    footer: {
      title: 'Quick Links',
      description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'], // eslint-disable-line
      link: ['#', '#', '#', '#', '#', '#'] // eslint-disable-line
    },
    news: [
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[4]
      },
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[1]
      },
      {
        type: 'news',
        text: 'Sed imperdiet enim ligula vitae viverra.',
        img: img.photo[3]
      }
    ]
  }),
  computed: {
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
