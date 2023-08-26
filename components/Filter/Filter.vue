<template>
  <aside class="filter">
    <div class="filter-block">
      <v-list @update:selected="(e) => changeCategory(e)">
        <v-list-subheader class="title-filter">
          Filter Categories
        </v-list-subheader>
        <v-list-item value="all" :class="{'v-list-item--active text-primary': filterCategory === 'all' }">
          <v-list-item-title>
            {{ $t('common.list_filter') }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-a" :class="{'v-list-item--active text-primary': filterCategory === 'cat-a' }">
          <v-list-item-title>Category a</v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-b" :class="{'v-list-item--active text-primary': filterCategory === 'cat-b' }">
          <v-list-item-title>Category b</v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-c" :class="{'v-list-item--active text-primary': filterCategory === 'cat-c' }">
          <v-list-item-title>Category c</v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-d" :class="{'v-list-item--active text-primary': filterCategory === 'cat-d' }">
          <v-list-item-title>Category d</v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-e" :class="{'v-list-item--active text-primary': filterCategory === 'cat-e' }">
          <v-list-item-title>Category e</v-list-item-title>
        </v-list-item>
        <v-list-item value="cat-f" :class="{'v-list-item--active text-primary': filterCategory === 'cat-f' }">
          <v-list-item-title>Category f</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <div class="filter-block">
      <v-list-subheader class="title-filter">
        Rating
      </v-list-subheader>
      <v-list lines="two" @update:selected="(e) => changeRating(e)">
        <v-list-item :value="0" :class="{'v-list-item--active text-primary': filterRating === 0 }">
          <v-list-item-title>All Rating</v-list-item-title>
        </v-list-item>
        <v-list-item :value="1" :class="{'v-list-item--active text-primary': filterRating === 1 }">
          <div>
            <v-list-item-title>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 1 star rating</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item :value="2" :class="{'v-list-item--active text-primary': filterRating === 2 }">
          <div>
            <v-list-item-title>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 2 star rating</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item :value="3" :class="{'v-list-item--active text-primary': filterRating === 3 }">
          <div>
            <v-list-item-title>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 3 star rating</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item :value="4" :class="{'v-list-item--active text-primary': filterRating === 4 }">
          <div>
            <v-list-item-title>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 4 star rating</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item :value="5" :class="{'v-list-item--active text-primary': filterRating === 5 }">
          <div>
            <v-list-item-title>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
              <v-icon color="orange">
                mdi-star
              </v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 5 star rating</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </div>
    <div class="filter-block">
      <h3 class="title-filter">
        Filter Tags
      </h3>
      <span class="btn-tag">
        <input
          id="tag_one"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.indexOf('tag-one')>-1"
          value="tag-one"
          @change="collectTag(filterTag)"
        >
        <label v-ripple for="tag_one">Tag One</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_two"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.indexOf('tag-two')>-1"
          value="tag-two"
          @change="collectTag(filterTag)"
        >
        <label v-ripple for="tag_two">Tag Two</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_three"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.indexOf('tag-three')>-1"
          value="tag-three"
          @change="collectTag(filterTag)"
        >
        <label v-ripple for="tag_three">Tag Three</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_four"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.indexOf('tag-four')>-1"
          value="tag-four"
          @change="collectTag(filterTag)"
        >
        <label v-ripple for="tag_four">Tag Four</label>
      </span>
    </div>
    <div class="filter-block">
      <div class="mb-2">
        <h3 class="title-filter">
          Filter Range
        </h3>
        <v-text-field v-model="from" hide-details class="input-price" variant="underlined" placeholder="$ From" />
        &nbsp; - &nbsp;
        <v-text-field v-model="to" hide-details class="input-price" variant="underlined" placeholder="$ To" />
      </div>
      <v-btn
        color="primary"
        :elevation="0"
        size="small"
        block
        @click="changeRange({from, to})"
      >
        Apply
        <v-icon class="use-rtl-flip">
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </div>
    <div class="filter-block">
      <v-list select-strategy="classic">
        <v-list-subheader class="title-filter">
          Filter Check
        </v-list-subheader>
        <v-list-item @click="handleCheckAll">
          <div>
            <v-list-item-title>Select All</v-list-item-title>
          </div>
        </v-list-item>
        <v-list-item value="check-a" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-a') > -1 }">
          <v-checkbox-btn value="check-a" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check A</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
        <v-list-item value="check-b" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-b') > -1 }">
          <v-checkbox-btn value="check-b" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check B</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
        <v-list-item value="check-c" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-c') > -1 }">
          <v-checkbox-btn value="check-c" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check C</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
        <v-list-item value="check-d" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-d') > -1 }">
          <v-checkbox-btn value="check-d" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check D</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
        <v-list-item value="check-e" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-e') > -1 }">
          <v-checkbox-btn value="check-e" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check E</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
        <v-list-item value="check-f" :class="{'v-list-item--active text-primary': filterCheck.indexOf('check-f') > -1 }">
          <v-checkbox-btn value="check-f" :model-value="filterCheck" @update:model-value="(e) => changeCheck(e)">
            <template #label>
              <v-list-item-title>Check F</v-list-item-title>
            </template>
          </v-checkbox-btn>
        </v-list-item>
      </v-list>
    </div>
    <div class="filter-block">
      <v-list>
        <v-list-subheader class="title-filter">
          Filter Radio
        </v-list-subheader>
        <v-radio-group
          :model-value="filterRadio"
          @change="(e) => changeRadio(e)"
        >
          <v-list-item>
            <v-radio color="primary" :label="$t('common.list_filter')" value="all" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-a" label="Radio A" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-b" label="Radio B" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-c" label="Radio C" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-d" label="Radio D" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-e" label="Radio E" />
          </v-list-item>
          <v-list-item>
            <v-radio color="primary" value="radio-f" label="Radio F" />
          </v-list-item>
        </v-radio-group>
      </v-list>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
export default {
  props: {
    filterRating: {
      type: Number,
      default: 0,
    },
    filterCategory: {
      type: String,
      required: true,
    },
    filterRadio: {
      type: String,
      required: true,
    },
    filterCheck: {
      type: Array,
      required: true,
    },
    handleCheckAll: {
      type: Function,
      required: true,
    },
  },
  emits: [
    'change-rating', 'change-category', 'change-radio',
    'change-check', 'change-from', 'change-to',
    'change-tag', 'change-range', 'collect-tag',
  ],
  data() {
    return {
      from: 0,
      to: 100,
      filterTag: ['tag-one', 'tag-two', 'tag-three', 'tag-four'],
    };
  },
  methods: {
    changeRating(filterRating) {
      this.$emit('change-rating', filterRating[0]);
    },
    changeCategory(filterCategory) {
      this.$emit('change-category', filterCategory[0]);
    },
    changeRadio(filterRadio) {
      this.$emit('change-radio', filterRadio.target.value);
    },
    changeCheck(items) {
      this.$emit('change-check', items);
    },
    changeFrom(from) {
      this.$emit('change-from', from);
    },
    changeTo(to) {
      this.$emit('change-to', to);
    },
    changeTag(filterTag) {
      this.$emit('change-tag', filterTag);
    },
    changeRange(val) {
      this.$emit('change-range', val);
    },
    collectTag(val) {
      this.$emit('collect-tag', val);
    },
  },
};
</script>
