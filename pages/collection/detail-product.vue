<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <detail />
      <description />
      <related-items />
      <comment-group />
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
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Detail from '~/components/List/Detail'
import Description from '~/components/List/Description'
import RelatedItems from '~/components/List/RelatedItems'
import Group from '~/components/Comment/Group'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Detail,
    Description,
    RelatedItems,
    'comment-group': Group
  },
  head() {
    return {
      title: brand.starter.name + ' - Detail Product'
    }
  }
}
</script>
