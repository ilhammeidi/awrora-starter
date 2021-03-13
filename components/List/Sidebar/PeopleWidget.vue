<template>
  <paper title="You may know" icon="mdi-account-group" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item v-for="(item, index) in people" :key="index">
          <v-list-item-avatar>
            <v-img :src="item.img" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small outlined>
              follow
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-btn text block color="primary">See all</v-btn>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      people: [
        {
          img: '/images/avatars/pp_boy5.svg',
          name: 'John Doe',
          title: 'Web Designer'
        },
        {
          img: '/images/avatars/pp_girl.svg',
          name: 'Jean Doe',
          title: 'Executive Merketing'
        },
        {
          img: '/images/avatars/pp_boy2.svg',
          name: 'Jim Doe',
          title: 'Dev Ops'
        },
        {
          img: '/images/avatars/pp_girl2.svg',
          name: 'Jihan Doe',
          title: 'Director'
        },
        {
          img: '/images/avatars/pp_girl3.svg',
          name: 'Jena Doe',
          title: 'CEO'
        },
        {
          img: '/images/avatars/pp_boy3.svg',
          name: 'Johan Doe',
          title: 'iOS Developer'
        }
      ]
    }
  }
}
</script>
