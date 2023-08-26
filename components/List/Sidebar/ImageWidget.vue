<template>
  <paper :title="$t('common.blog_album')" icon="mdi-image-multiple" subtitle="">
    <div>
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row class="ma-0">
          <v-col
            v-for="(item, i) in images"
            :key="i"
            cols="6"
            class="gallery-item"
          >
            <v-item v-slot="{ active, toggle }">
              <v-img
                cover
                :src="item.src"
                height="150"
                class="text-right pa-1"
                @click="toggle"
              >
                <v-btn
                  icon
                  variant="text"
                  color="white"
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-btn variant="text" block color="primary">
        {{ $t('common.btn_seeall') }}
      </v-btn>
    </div>
  </paper>
</template>

<style scoped lang="scss">
@import '../list.scss';
</style>

<script>
import Paper from '../../Paper';

export default {
  components: {
    Paper,
  },
  data() {
    return {
      images: [
        {
          src: 'https://source.unsplash.com/random/?nice',
        },
        {
          src: 'https://source.unsplash.com/random/?nice',
        },
        {
          src: 'https://source.unsplash.com/random/?nice',
        },
        {
          src: 'https://source.unsplash.com/random/?nice',
        },
      ],
      selected: [],
    };
  },
};
</script>
