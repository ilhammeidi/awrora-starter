<template>
  <v-row class="sorter" align="center" >
    <v-col class="py-1" lg="9" md="8" sm="6" cols="12">
      <h2 class="use-text-subtitle">{{ resultLength }} Items Found</h2>
    </v-col>
    <v-col class="py-1" lg="3" md="4" sm="6" cols="12">
      <div class="d-flex justify-end align-center">
        <v-btn
          v-if="isMobile"
          color="primary"
          small
          class="me-4"
          outlined
          @click="handleOpenFilter"
        >
          <v-icon left>
            mdi-filter-variant
          </v-icon>
          Filter
        </v-btn>
        <v-btn-toggle
          v-if="isDesktop"
          :value="view"
          class="me-4"
          @change="(e) => switchView(e)"
        >
          <v-btn small>
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn small>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-select
          value="sortBySelected"
          :items="sortList"
          @change="(e) => handleSortBy(e)"
          item-text="title"
          item-value="value"
          label="Sort By:"
          return-object
          single-line
          persistent-hint
        />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
export default {
  data() {
    return {
      sortList: [
        {
          title: 'Title A to Z',
          value: 'title-asc'
        },
        {
          title: 'Title Z to A',
          value: 'title-desc'
        },
        {
          title: 'Highest Price',
          value: 'price-asc'
        },
        {
          title: 'Lowest Price',
          value: 'price-desc'
        }
      ]
    }
  },
  methods: {
    switchView(view) {
      this.$emit('switch-view', view)
    },
    handleSortBy(sortBySelected) {
      this.$emit('sort-by', sortBySelected)
    },
    handleOpenFilter() {
      this.$emit('open-filter')
    }
  },
  props: {
    view: {
      type: Number,
      default: 0
    },
    sortBySelected: {
      type: Object,
      required: true
    },
    resultLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
