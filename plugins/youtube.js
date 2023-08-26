import YouTube from 'vue3-youtube';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('YouTube', YouTube);
});
