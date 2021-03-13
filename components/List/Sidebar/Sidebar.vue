<template>
  <div class="mt-15">
    <product-widget />
    <div class="py-6" />
    <people-widget />
    <div class="py-6" />
    <news-widget />
    <div class="py-6" />
    <trending-widget />
    <div class="py-6" />
    <image-widget />
    <div class="py-6" />
    <help-widget />
  </div>
</template>

<script>
import PeopleWidget from './PeopleWidget'
import TrendingWidget from './TrendingWidget'
import NewsWidget from './NewsWidget'
import ImageWidget from './ImageWidget'
import ProductWidget from './ProductWidget'
import HelpWidget from './HelpWidget'

export default {
  components: {
    PeopleWidget,
    TrendingWidget,
    NewsWidget,
    ImageWidget,
    ProductWidget,
    HelpWidget
  }
}
</script>
