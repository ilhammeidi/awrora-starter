<template>
  <paper :title="$t('common.blog_archived')" icon="mdi-folder-outline">
    <div>
      <v-list
        subheader
      >
        <v-list-item
          v-for="(item, index) in periode"
          :key="index"
          href="#"
        >
          <div>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </div>
          <template #append>
            <v-icon class="use-rtl-flip" color="grey lighten-1">
              mdi-chevron-right
            </v-icon>
          </template>
        </v-list-item>
      </v-list>
      <v-btn variant="text" block color="primary">
        {{ $t('common.btn_seeall') }}
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
      periode: [
        'October 2018',
        'September 2018',
        'August 2018',
        'July 2018',
        'June 2018',
        'April 2018',
        'March 2018',
        'Febuary 2018',
      ],
    };
  },
};
</script>
