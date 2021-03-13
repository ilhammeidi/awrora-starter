<template>
  <v-card
    :class="[orientation, type]"
    class="media-card"
  >
    <v-badge
      v-if="type === 'video'"
      :content="duration"
      color="grey darken-4"
      offset-x="60"
      offset-y="40"
    />
    <a
      v-if="type === 'photo'"
      :href="href !== '' ? href : 'javascript:void(0)'"
      v-ripple
      class="cover-link"
    >
      &nbsp;
    </a>
    <figure>
      <img :src="thumb" alt="cover" />
    </figure>
    <div class="property">
      <v-btn
        v-if="type === 'video'"
        :href="href"
        class="play-btn"
        elevation="1"
      >
        <span class="ion-ios-play" />
      </v-btn>
      <v-card-title class="media-title">
        {{ title }}
      </v-card-title>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './media-card';
</style>

<script>
export default {
  props: {
    thumb: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    duration: {
      type: String,
      default: '00:01'
    },
    type: {
      type: String,
      default: 'video' // available props: photo, video
    }
  }
}
</script>
