<template>
  <paper title="Headline News" icon="mdi-newspaper" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-list
        subheader
        lines="two"
      >
        <v-list-item
          v-for="(item, index) in news"
          :key="index"
          href="#"
        >
          <template #prepend>
            <v-avatar rounded="lg" width="60">
              <v-img cover :src="item.img" />
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.source }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <v-btn variant="text" block color="primary">
        See all
      </v-btn>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper';

export default {
  components: {
    Paper,
  },
  data() {
    return {
      news: [
        {
          img: 'https://source.unsplash.com/random/?orientation=squarish',
          title: 'Vestibulum bibendum nisi eget magna',
          source: 'the-news.com',
        },
        {
          img: 'https://source.unsplash.com/random/?orientation=squarish',
          title: 'Quisque a consequat ante',
          source: 'the-news.com',
        },
        {
          img: 'https://source.unsplash.com/random/?orientation=squarish',
          title: 'Donec dignissim, odio ac imperdiet luctus',
          source: 'the-news.com',
        },
        {
          img: 'https://source.unsplash.com/random/?orientation=squarish',
          title: 'Suspendisse eleifend nunc non',
          source: 'the-news.com',
        },
        {
          img: 'https://source.unsplash.com/random/?orientation=squarish',
          title: 'Vestibulum a massa vestibulum',
          source: 'the-news.com',
        },
      ],
    };
  },
};
</script>
