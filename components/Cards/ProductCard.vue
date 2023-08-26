<template>
  <v-card :class="[orientation, type]" class="product-card">
    <a v-ripple :href="href" class="hidden-link">&nbsp;</a>
    <figure>
      <img :src="img" :alt="title">
    </figure>
    <div class="desc">
      <div class="text">
        <h6 class="use-text-subtitle2 pb-2 text-truncate">
          {{ title }}
        </h6>
        <p class="use-text-paragraph">
          {{ desc }}
        </p>
      </div>
      <div>
        <div class="property">
          <div v-if="rating > 0" class="rating">
            <v-rating
              :model-value="rating"
              color="orange lighten-3"
              background-color="grey"
              length="5"
              readonly
              size="24"
            />
          </div>
          <strong v-if="price > 0">${{ price }}</strong>
        </div>
        <v-btn :href="href" block class="button" variant="outlined" color="primary">
          {{ $t('common.btn_detail') }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './product-card';
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'full', // available props: full, rounded, over, oval
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    orientation: {
      type: String,
      default: 'portrait',
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
