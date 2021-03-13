<template>
  <v-row>
    <v-col v-for="index in 9" :key="index" md="4" class="pa-5">
      <profile-card
        :connection="100"
        :favorites="10"
        :albums="12"
        cover="https://source.unsplash.com/random"
        name="John Dalton"
        title="Web Designer"
        type="full"
        orientation="portrait"
      />
    </v-col>
  </v-row>
</template>

<script>
import ProfileCard from '../Cards/ProfileCard'

export default {
  components: {
    ProfileCard
  }
}
</script>
