<template>
  <paper :title="$t('common.blog_archived')" icon="mdi-folder-outline">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item
          v-for="(item, index) in periode"
          :key="index"
          href="#"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-btn text block color="primary">
        {{ $t('common.btn_seeall') }}
      </v-btn>
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
      periode: [
        'October 2018',
        'September 2018',
        'August 2018',
        'July 2018',
        'June 2018',
        'April 2018',
        'March 2018',
        'Febuary 2018'
      ]
    }
  }
}
</script>
