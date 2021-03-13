<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap">
      <search v-model="keyword" />
      <div class="search-content">
        <v-container>
          <sorter
            :view="toggleView"
            :sort-by-selected="sortBySelected"
            :result-length="filteredItems.length"
            @switch-view="handleToggleView"
            @sort-by="handleSortBy"
            @open-filter="handleOpenFilter"
          />
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
              <v-toolbar
                dark
                color="primary"
                flat
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Filter</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    dark
                    text
                    @click="dialog = false"
                  >
                    Done
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <filter-side
                :filter-rating="filterRating"
                :filter-category="filterCategory"
                :filter-radio="filterRadio"
                :filter-check="filterCheck"
                :filter-tag="filterTag"
                :handle-check-all="handleCheckAll"
                @change-rating="handleRating"
                @change-category="handleCategory"
                @change-radio="handleRadio"
                @change-check="handleCheck"
                @change-range="handleRangeFilter"
                @collect-tag="handleCollectTag"
              />
            </v-card>
          </v-dialog>
          <v-row align="start" justify="start">
            <v-col class="pa-0 pa-md-3" lg="2" md="3" cols="12">
              <hidden point="smDown">
                <filter-side
                  :filter-rating="filterRating"
                  :filter-category="filterCategory"
                  :filter-radio="filterRadio"
                  :filter-check="filterCheck"
                  :filter-tag="filterTag"
                  :handle-check-all="handleCheckAll"
                  @change-rating="handleRating"
                  @change-category="handleCategory"
                  @change-radio="handleRadio"
                  @change-check="handleCheck"
                  @change-range="handleRangeFilter"
                  @collect-tag="handleCollectTag"
                />
              </hidden>
            </v-col>
            <v-col lg="10" md="9" cols="12">
              <v-row>
                <v-col v-if="filteredItems.length < 1" sm="12">
                  <h3>Not found</h3>
                </v-col>
                <v-col
                  v-for="(item, index) in filteredItems" :key="index"
                  v-if="item.title.toLowerCase().indexOf(keyword) > -1"
                  :sm="toggleView === 0 ? 4 : 12"
                  cols="12"
                  class="mb-5"
                >
                  <div class="d-flex justify-center">
                    <card-products
                      :rating="item.rating"
                      :price="item.price"
                      :title="item.title"
                      :desc="'Category: '+item.category+' ~ '+'Tag: '+item.tag+' ~ '+'Check: '+item.check+' ~ '+'Radio: '+item.radio"
                      :orientation="toggleView === 0 ? 'portrait' : 'landscape'"
                      img="https://source.unsplash.com/random"
                      type="round"
                      href="/collection/detail-product"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import CardProducts from '~/components/Cards/ProductCard'
import Search from '~/components/Filter/Search'
import Sorter from '~/components/Filter/Sorter'
import Filter from '~/components/Filter/Filter'
import brand from '~/static/text/brand'
import products from '~/static/api/products'

const checkItems = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f'
]

export default {
  components: {
    'main-header': Header,
    CardProducts,
    Search,
    Sorter,
    Hidden,
    'filter-side': Filter,
    'main-footer': Footer
  },
  data() {
    return {
      dialog: false,
      sortBy: 'price',
      sortFrom: -1,
      sortTo: 1,
      toggleView: 0,
      filterRating: 0,
      filterCategory: 'all',
      filterRadio: 'all',
      filterCheck: checkItems,
      range: {
        from: 0,
        to: 100
      },
      sortBySelected: {
        title: 'Highest Price',
        value: 'price-asc'
      },
      filterTag: ['tag-one', 'tag-two', 'tag-three', 'tag-four'],
      keyword: '',
      cardItems: products
    }
  },
  methods: {
    handleOpenFilter() {
      this.dialog = true
    },
    handleRating(val) {
      this.filterRating = val
    },
    handleCategory(val) {
      this.filterCategory = val
    },
    handleRadio(val) {
      this.filterRadio = val
    },
    handleCheck(val) {
      this.filterCheck = val
    },
    handleCheckAll() {
      this.filterCheck = checkItems
    },
    handleRangeFilter(val) {
      this.range.from = val.from
      this.range.to = val.to
    },
    handleCollectTag(val) {
      this.filterTag = val
    },
    handleToggleView(val) {
      this.toggleView = val
    },
    handleSortBy(e) {
      switch (e.value) {
        case 'title-asc':
          this.sortBy = 'title'
          this.sortFrom = 1
          this.sortTo = -1
          break
        case 'title-desc':
          this.sortBy = 'title'
          this.sortFrom = -1
          this.sortTo = 1
          break
        case 'price-asc':
          this.sortBy = 'price'
          this.sortFrom = -1
          this.sortTo = 1
          break
        default:
          this.sortBy = 'price'
          this.sortFrom = 1
          this.sortTo = -1
      }
    }
  },
  computed: {
    filteredItems: function() {
      // Compare same tag
      const intersection = (firstArray, secondArray) =>
        firstArray.filter(element => secondArray.includes(element))

      // Check is all categories checked
      const checkFilter = (item, filterData) => {
        if (filterData !== 'all') {
          return item === filterData
        }
        return true
      }

      return this.cardItems
        .filter(cardItem => {
          return (
            checkFilter(cardItem.category, this.filterCategory) &&
            checkFilter(cardItem.radio, this.filterRadio) &&
            cardItem.price >= this.range.from &&
            cardItem.price <= this.range.to &&
            cardItem.rating >= this.filterRating &&
            this.filterCheck.indexOf(cardItem.check) > -1 &&
            intersection(this.filterTag, cardItem.tag).length > 0
          )
        })
        .sort(
          (a, b) =>
            a[this.sortBy] > b[this.sortBy] ? this.sortFrom : this.sortTo
        )
    }
  },
  head() {
    return {
      title: brand.starter.name + ' - Product List'
    }
  }
}
</script>
