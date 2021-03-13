<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h4 class="use-text-subtitle mb-3">
            Vestibulum consequat hendrerit lacus
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h4>
        </v-card-title>
        <div class="text-center" v-if="yt.use">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <h4 class="use-text-subtitle mb-3">
      Lorem ipsum dolor sit amet.
    </h4>
    <p class="pb-2 use-text-subtitle2">
      Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero
    </p>
    <div v-ripple @click="handleVideoOpen">
      <media-card
        title="Sed lacinia velit, ut malesuada eros interdum a"
        orientation="landscape"
        type="video"
        thumb="https://source.unsplash.com/random"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'
import MediaCard from '../Cards/MediaCard'

export default {
  components: {
    MediaCard
  },
  data() {
    return {
      videoId: 'sf15CtXuw9M',
      player: null,
      yt: youtube,
      imgAPI: imgAPI,
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8000'
      }
    }
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  }
}
</script>
