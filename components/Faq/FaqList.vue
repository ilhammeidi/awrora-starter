<template>
  <div>
    <div
      v-for="(index) in 6"
      :key="index"
      :id="'topic'+index"
      class="accordion"
    >
      <h4 class="use-text-subtitle mb-3">
        Lorem ipsum dolor sit amet
      </h4>
      <v-expansion-panels
        v-model="panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, index) in faqData"
          :key="index"
          class="paper"
        >
           <v-expansion-panel-header class="content">
            <span class="heading">
              {{ item.q }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="detail">
            <span>
              {{ item.a }}
            </span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  }
]

export default {
  data() {
    return {
      panel: 0,
      faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
