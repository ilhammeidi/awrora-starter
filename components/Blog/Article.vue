<template>
  <article class="blog-content">
    <h4 class="use-text-title2 title-blog">Maecenas rutrum dolor sed nisi</h4>
    <time class="caption">June 19, 2020 by Oliver</time>
    <figure class="image-blog">
      <img src="https://source.unsplash.com/random" alt="blog" />
    </figure>
    <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
    <strong>Heading</strong>
    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    <strong>Sub-heading</strong>
    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    <p>Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo. Tortor mauris condimentum nibh, ut fermentum massa.</p>
    <strong>Sub-heading</strong>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    <figure class="image-blog">
      <img src="https://source.unsplash.com/random" alt="blog" />
    </figure>
    <ul class="list">
      <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
      <li>Donec id elit non mi porta gravida at eget metus.</li>
      <li>Nulla vitae elit libero, a pharetra augue.</li>
    </ul>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a  pharetra augue.</p>
    <ol>
      <li>Vestibulum id ligula porta felis euismod semper.</li>
      <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus.</li>
      <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
    </ol>
    <div class="share-socmed">
      <h3 class="subtitle">{{ $t('common.blog_share') }}</h3>
      <v-btn
        :icon="isMobile"
        outlined
        rounded
        class="facebook"
      >
        <v-icon>mdi-facebook</v-icon>
        {{ isMobile ? '' : 'facebook' }}
      </v-btn>
      <v-btn
        :icon="isMobile"
        outlined
        rounded
        class="twitter"
      >
        <v-icon>mdi-twitter</v-icon>
        {{ isMobile ? '' : 'twitter' }}
      </v-btn>
      <v-btn
        :icon="isMobile"
        outlined
        rounded
        class="linkedin"
      >
        <v-icon>mdi-linkedin</v-icon>
        {{ isMobile ? '' : 'linkedin' }}
      </v-btn>
    </div>
    <div class="comment">
      <h3 class="subtitle">{{ $t('common.blog_write') }}</h3>
      <comment-form avatar="/images/avatars/pp_boy2.svg" />
      <v-list three-line>
        <comment-item
          v-for="(item, index) in comments"
          :key="index"
          :avatar="item.avatar"
          :name="item.name"
          :date="item.date"
          :comment="item.comment"
          :last="index >= comments.length - 1"
        />
      </v-list>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script>
import Form from '../Comment/Form'
import Item from '../Comment/Item'

export default {
  components: {
    'comment-item': Item,
    'comment-form': Form
  },
  data() {
    return {
      comments: [
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        },
        {
          name: 'John Doe',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 Jan 2020',
          comment:
            'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
        }
      ]
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
