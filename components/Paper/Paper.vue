<template>
  <v-card class="paper" :class="{ color: color }">
    <header>
      <v-icon :color="color ? 'white' : ''" size="x-large" class="icon">
        {{ icon }}
      </v-icon>
      <div class="text">
        <v-card-title class="use-text-subtitle2">
          {{ title }}
        </v-card-title>
        <v-card-subtitle v-if="subtitle !== ''">
          {{ subtitle }}
        </v-card-subtitle>
      </div>
    </header>
    <div class="content">
      <slot />
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './paper';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    color: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
