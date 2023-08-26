import VueEasyLightbox from 'vue-easy-lightbox';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueEasyLightbox);
});
