<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general pt-15">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article-blog />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import BlogHeader from '~/components/Header/BlogHeader'
import Article from '~/components/Blog/Article'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Sidebar,
    'article-blog': Article
  },
  head() {
    return {
      title: brand.starter.name + ' - Blog Detail'
    }
  }
}
</script>
