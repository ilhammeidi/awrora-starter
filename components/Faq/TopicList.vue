<template>
  <div>
    <h4 class="use-text-subtitle mb-3">
      {{ $t('common.faq_topic') }}
      FAQ Topics
    </h4>
    <ul class="topic-list">
      <li v-for="(item, index) in topics" :key="index">
        <a :href="item.href">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: 'Nullam pulvinar pellentesque',
          href: '#topic1'
        },
        {
          title: 'Sed luctus mauris',
          href: '#topic2'
        },
        {
          title: 'Vestibulum libero',
          href: '#topic3'
        },
        {
          title: 'Pellentesque a magna eget',
          href: '#topic4'
        },
        {
          title: 'Suspendisse pulvinar non orci vel lobortis',
          href: '#topic5'
        },
        {
          title: 'Quisque posuere at nisi',
          href: '#topic6'
        }
      ]
    }
  }
}
</script>
