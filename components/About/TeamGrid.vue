<template>
  <v-row>
    <v-col v-for="index in 9" :key="index" md="4" sm="6" class="pa-5">
      <div
        data-aos="fade-up"
        :data-aos-delay="(200 + (100 * index))"
        data-aos-duration="500"
      >
        <profile-card
          :connection="100"
          :favorites="10"
          :albums="12"
          cover="https://source.unsplash.com/random/?landscape"
          name="John Dalton"
          title="Web Designer"
          type="full"
          orientation="portrait"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import AOS from 'aos';
import ProfileCard from '../Cards/ProfileCard';

export default {
  components: {
    ProfileCard,
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
