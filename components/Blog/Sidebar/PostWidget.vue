<template>
  <paper :title="$t('common.blog_post')" icon="mdi-bookmark-outline">
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
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
          title: 'Vestibulum bibendum nisi eget magna',
          date: 'Jan 9, 2014'
        },
        {
          title: 'Quisque a consequat ante',
          date: 'Jan 9, 2014'
        },
        {
          title: 'Donec dignissim, odio ac imperdiet luctus',
          date: 'Jan 9, 2014'
        },
        {
          title: 'Suspendisse eleifend nunc non',
          date: 'Jan 9, 2014'
        },
        {
          title: 'Vestibulum a massa vestibulum',
          date: 'Jan 9, 2014'
        }
      ]
    }
  }
}
</script>
