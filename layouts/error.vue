<template>
  <div>
    <main-header />
    <Error
      :err-code="this.error.statusCode"
      :text="$t('common.404')"
    />
    <main-footer />
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Error from '../components/Error'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.starter.name + ' - ' + this.pageNotFound
        : brand.starter.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
