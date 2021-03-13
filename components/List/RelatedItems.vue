<template>
  <v-row justify="center">
    <v-col lg="10" md="12" class="pa-6">
      <h4 class="use-text-subtitle mb-3">
        {{ $t('common.list_related') }}
      </h4>
      <v-row class="scroll-tablet">
        <v-col
          v-for="index in 4"
          :key="index"
          class="px-2"
          md="3"
          sm="4"
          cols="10"
        >
          <product-card
            :rating="3"
            :price="20"
            img="https://source.unsplash.com/random"
            title="Sed lacinia velit"
            desc="Proin pretium arcu eget metus porta consecteturc"
            orientation="portrait"
            type="over"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>

<script>
import ProductCard from '../Cards/ProductCard'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    ProductCard
  },
  data: () => ({
    imgAPI: imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
