<template>
  <paper title="Related Products" icon="mdi-tag" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row class="ma-0">
          <v-col
            v-for="(item, i) in products"
            :key="i"
            cols="6"
            md="6"
            sm="3"
            class="product-item"
          >
            <v-item>
              <a href="#" v-ripple>
                <v-img
                  :src="item.image"
                  height="100"
                  class="image"
                />
                <p class="text-truncate text-body-1 mt-2 mb-0">{{ item.text }}</p>
                <h6 class="text-h6 price">$ {{ item.price }}</h6>
              </a>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-btn text block color="primary">See all</v-btn>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../list.scss';
</style>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      products: [
        {
          image: 'https://source.unsplash.com/random',
          text: 'Sed lacinia velit',
          price: '32'
        },
        {
          image: 'https://source.unsplash.com/random',
          text: 'Sed lacinia velit',
          price: '20'
        },
        {
          image: 'https://source.unsplash.com/random',
          text: 'Sed lacinia velit',
          price: '15'
        },
        {
          image: 'https://source.unsplash.com/random',
          text: 'Sed lacinia velit',
          price: '21'
        }
      ],
      selected: []
    }
  }
}
</script>
