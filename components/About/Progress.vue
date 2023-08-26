<template>
  <div ref="wrapper" v-scroll="handleScroll" class="progress-wrap">
    <ul>
      <li>
        <div class="text-icon">
          <i class="ion-ios-color-wand" />
          <h5 class="use-text-subtitle2">
            UI Interface Design
          </h5>
        </div>
        <v-progress-linear
          :height="10"
          :model-value="play ? 80 : 0"
          color="none"
          class="progress"
        />
      </li>
      <li>
        <div class="text-icon">
          <i class="ion-logo-dribbble" />
          <h5 class="use-text-subtitle2">
            Icon Design
          </h5>
        </div>
        <v-progress-linear
          :height="10"
          :model-value="play ? 70 : 0"
          color="none"
          class="progress"
        />
      </li>
      <li>
        <div class="text-icon">
          <i class="ion-ios-globe" />
          <h5 class="use-text-subtitle2">
            HTML Prototyping
          </h5>
        </div>
        <v-progress-linear
          :height="10"
          :model-value="play ? 60 : 0"
          color="none"
          class="progress"
        />
      </li>
      <li>
        <div class="text-icon">
          <i class="ion-ios-camera" />
          <h5 class="use-text-subtitle2">
            Photo Editing
          </h5>
        </div>
        <v-progress-linear
          :height="10"
          :model-value="play ? 90 : 0"
          color="none"
          class="progress"
        />
      </li>
      <li>
        <div class="text-icon">
          <i class="ion-ios-snow" />
          <h5 class="use-text-subtitle2">
            Graphic Illustrations
          </h5>
        </div>
        <v-progress-linear
          :height="10"
          :model-value="play ? 80 : 0"
          color="none"
          class="progress"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
export default {
  data() {
    return {
      play: false,
    };
  },
  methods: {
    handleScroll() {
      const { wrapper } = this.$refs;
      const windowBound = wrapper.getBoundingClientRect();

      if (windowBound.top < 100) {
        this.play = true;
      }
    },
  },
};
</script>
