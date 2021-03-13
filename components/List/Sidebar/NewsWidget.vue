<template>
  <paper title="Headline News" icon="mdi-newspaper" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item
          v-for="(item, index) in news"
          :key="index"
          href="#"
        >
          <v-list-item-avatar rounded="lg" width="60">
            <v-img :src="item.img" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.source }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn text block color="primary">See all</v-btn>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      news: [
        {
          img: 'https://source.unsplash.com/random',
          title: 'Vestibulum bibendum nisi eget magna',
          source: 'the-news.com'
        },
        {
          img: 'https://source.unsplash.com/random',
          title: 'Quisque a consequat ante',
          source: 'the-news.com'
        },
        {
          img: 'https://source.unsplash.com/random',
          title: 'Donec dignissim, odio ac imperdiet luctus',
          source: 'the-news.com'
        },
        {
          img: 'https://source.unsplash.com/random',
          title: 'Suspendisse eleifend nunc non',
          source: 'the-news.com'
        },
        {
          img: 'https://source.unsplash.com/random',
          title: 'Vestibulum a massa vestibulum',
          source: 'the-news.com'
        }
      ]
    }
  }
}
</script>
