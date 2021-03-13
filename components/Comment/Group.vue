<template>
  <v-row justify="center">
    <v-col lg="10" md="12" class="pa-6">
      <v-row>
        <v-col class="px-4" sm="8" cols="12">
          <h4 class="use-text-subtitle mb-3 text-capitalize">
            {{ $t('common.list_comments') }}
          </h4>
          <comment-form avatar="/images/avatars/pp_boy2.svg" />
          <v-list three-line>
            <comment-item
              v-for="(item, index) in comments"
              :key="index"
              :avatar="item.avatar"
              :name="item.name"
              :date="item.date"
              :comment="item.comment"
              :last="index >= comments.length"
            />
          </v-list>
        </v-col>
        <v-col class="pa-3" sm="4">
          <comment-help />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './comment.scss';
</style>

<script>
import Item from './Item'
import Form from './Form'
import Help from './Help'

export default {
  components: {
    'comment-item': Item,
    'comment-form': Form,
    'comment-help': Help
  },
  data() {
    return {
      comments: [
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        }
      ]
    }
  }
}
</script>
