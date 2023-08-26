<template>
  <basic v-if="type === 'basic'" />
  <blog v-if="type === 'blog'" />
  <contact-footer v-if="type === 'contact'" />
  <site-map v-if="type === 'sitemap'" />
</template>

<script>
import ui from '@/composables/uiTheme';
import Basic from './Basic';
import Blog from './Blog';
import Contact from './Contact';
import SiteMap from './SiteMap';

export default {
  components: {
    Basic,
    Blog,
    'contact-footer': Contact,
    SiteMap,
  },
  setup() {
    const type = ui.footer();
    return {
      type,
    };
  },
};
</script>
