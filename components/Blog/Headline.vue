<template>
   <v-card v-ripple class="blog-headline" dark>
    <v-img
      src="https://source.unsplash.com/random"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      height="460px"
    >
      <a href="#" class="anchor-content">
        <v-card-title class="headline-title use-text-title">Pellentesque habitant morbi tristique senectus </v-card-title>
        <v-card-subtitle class="text-h6 use-text-subtitle">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. </v-card-subtitle>
      </a>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>
