<template>
  <page-nav v-if="type === 'nav'" />
  <chat v-if="type === 'chat'" />
</template>

<script>
import ui from '@/composables/uiTheme';
import PageNav from '../PageNav';
import Chat from '../Chat';

export default {
  components: {
    PageNav,
    Chat,
  },
  setup() {
    const type = ui.corner();
    return {
      type,
    };
  },
};
</script>
