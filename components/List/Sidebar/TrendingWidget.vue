<template>
  <paper title="Trending now" icon="mdi-trending-up" subtitle="Donec commodo convallis ligula eget suscipit orci">
    <v-list
      subheader
      two-line
    >
      <v-list-item
        v-for="(item, index) in trending"
        :key="index"
        href="#"
      >
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            {{ index + 1 }}.
            #{{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.share }}k Views</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
      trending: [
        {
          title: 'Vestibulum faucibus',
          share: 130
        },
        {
          title: 'Nulla eget lobortis lacus',
          share: 120
        },
        {
          title: 'Cras convallis',
          share: 100
        },
        {
          title: 'Quisque a consequat',
          share: 88
        },
        {
          title: 'Suspendisse',
          share: 90
        }
      ]
    }
  }
}
</script>
