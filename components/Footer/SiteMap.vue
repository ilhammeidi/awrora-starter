<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col
          class="pa-4 px-lg-10"
          md="3"
          cols="12"
        >
          <logo type="portrait" />
          <p v-if="isDesktop" class="body-2 text-center">
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
        <v-col
          class="pa-4"
          md="6"
          cols="12"
        >
          <v-expansion-panels v-if="isMobile">
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <h6 class="title mb-4">
                  {{ $t('common.footer_'+footer.title) }}
                </h6>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row
            v-if="isDesktop"
            justify="space-around"
          >
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              class="pa-4 site-map-item"
            >
              <h6 class="title mb-4">
                {{ $t('common.footer_'+footer.title) }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
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
              <span class="ion-logo-twitter icon" />
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
            @change="switchLang(lang)"
            label=""
            outlined
            class="select-lang"
          />
          <p v-if="isMobile" class="body-2 text-center">
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-sitemap';
</style>

<script>
import Logo from '../Logo'
import brand from '~/static/text/brand'

export default {
  components: {
    Logo
  },
  data: () => ({
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
        link: ['#', '#', '#', '#']
      },
      {
        title: 'resources',
        description: [
          'Resource',
          'Resource name',
          'Another resource',
          'Final resource'
        ],
        link: ['#', '#', '#', '#']
      },
      {
        title: 'legal',
        description: ['Privacy policy', 'Terms of use'],
        link: ['#', '#']
      }
    ]
  }),
  mounted() {
    this.lang = this.$i18n.locale
  },
  computed: {
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
