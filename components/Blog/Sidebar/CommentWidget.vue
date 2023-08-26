<template>
  <paper :title="$t('common.blog_comment')" icon="mdi-comment-outline">
    <div>
      <v-list
        subheader
        lines="two"
      >
        <v-list-item v-for="(item, index) in comments" :key="index" href="#">
          <template #prepend>
            <v-avatar :color="item.color">
              <span class="white--text use-text-title2">{{ firstChar(item.name) }}</span>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.comment }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
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
      comments: [
        {
          color: 'teal',
          name: 'John Doe',
          comment: 'Duis viverra neque eget ',
        },
        {
          color: 'pink',
          name: 'Jean Doe',
          comment: 'Duis viverra neque eget ',
        },
        {
          color: 'purple',
          name: 'Jim Doe',
          comment: 'Duis viverra neque eget ',
        },
        {
          color: 'amber',
          name: 'Jihan Doe',
          comment: 'Duis viverra neque eget ',
        },
        {
          color: 'cyan',
          name: 'Jena Doe',
          comment: 'Duis viverra neque eget ',
        },
        {
          color: 'deepBlue',
          name: 'Johan Doe',
          comment: 'Duis viverra neque eget ',
        },
      ],
    };
  },
  methods: {
    firstChar(str) {
      return str.charAt(0);
    },
  },
};
</script>
