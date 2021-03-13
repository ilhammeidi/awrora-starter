<template>
  <paper :title="$t('common.blog_comment')" icon="mdi-comment-outline">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item v-for="(item, index) in comments" :key="index" href="#">
          <v-list-item-avatar :color="item.color">
            <span class="white--text headline">{{ firstChar(item.name) }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.comment }}</v-list-item-subtitle>
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
      comments: [
        {
          color: 'teal',
          name: 'John Doe',
          comment: 'Duis viverra neque eget '
        },
        {
          color: 'pink',
          name: 'Jean Doe',
          comment: 'Duis viverra neque eget '
        },
        {
          color: 'purple',
          name: 'Jim Doe',
          comment: 'Duis viverra neque eget '
        },
        {
          color: 'amber',
          name: 'Jihan Doe',
          comment: 'Duis viverra neque eget '
        },
        {
          color: 'cyan',
          name: 'Jena Doe',
          comment: 'Duis viverra neque eget '
        },
        {
          color: 'deepBlue',
          name: 'Johan Doe',
          comment: 'Duis viverra neque eget '
        }
      ]
    }
  },
  methods: {
    firstChar: function(str) {
      return str.charAt(0)
    }
  }
}
</script>
