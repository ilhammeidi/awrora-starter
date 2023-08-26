<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap">
      <search v-model="keyword" />
      <div class="search-content">
        <v-container>
          <v-row align="start" justify="center">
            <v-col md="8" cols="12">
              <div id="profile_portrait" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Profile Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="6" cols="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="oval"
                      orientation="portrait"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="full"
                      orientation="portrait"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="round"
                      orientation="portrait"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="over"
                      orientation="portrait"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="profile_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Profile Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="full"
                      orientation="landscape"
                    />
                    <br><br>
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="oval"
                      orientation="landscape"
                    />
                    <br><br>
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="round"
                      orientation="landscape"
                    />
                    <br><br>
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      cover="https://source.unsplash.com/random/?nice"
                      name="John Dalton"
                      title="Web Designer"
                      type="over"
                      orientation="landscape"
                    />
                    <br><br>
                  </v-col>
                </v-row>
              </div>
              <div id="product_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Product Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="6" cols="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="full"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="oval"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="round"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="over"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="product_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Product Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="landscape"
                      type="full"
                    />
                    <br><br>
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="landscape"
                      type="oval"
                    />
                    <br><br>
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="landscape"
                      type="round"
                    />
                    <br><br>
                    <product-card
                      :rating="3"
                      :price="20"
                      img="https://source.unsplash.com/random/?nice"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="landscape"
                      type="over"
                    />
                    <br><br>
                  </v-col>
                </v-row>
              </div>
              <div id="media_video" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Video Cards
                </h4>
                <v-row>
                  <v-col v-for="index in 2" :key="index" sm="6" cols="12">
                    <media-card
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="video"
                      thumb="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="media_photo" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Image Cards
                </h4>
                <v-row>
                  <v-col v-for="index in 2" :key="index" sm="6" cols="12">
                    <media-card
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      thumb="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="news_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  News Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="6" cols="12">
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="full"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="oval"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="round"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="over"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="news_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  News Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="landscape"
                      type="full"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="landscape"
                      type="oval"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="landscape"
                      type="round"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <news-card
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="landscape"
                      type="over"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                  </v-col>
                </v-row>
              </div>
              <div id="post_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Post Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="6" cols="12">
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="full"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="oval"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="round"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                  <v-col sm="6" cols="12">
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="over"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="post_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Post Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="full"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="oval"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="round"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                    <post-card
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="over"
                      img="https://source.unsplash.com/random/?nice"
                      href="#"
                    />
                    <br><br>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col md="3" cols="12">
              <sidebar />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Search from '@/components/Filter/Search';
import PostCard from '@/components/Cards/PostCard';
import NewsCard from '@/components/Cards/NewsCard';
import MediaCard from '@/components/Cards/MediaCard';
import ProductCard from '@/components/Cards/ProductCard';
import ProfileCard from '@/components/Cards/ProfileCard';
import Sidebar from '@/components/List/Sidebar';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  data() {
    return {
      keyword: '',
    };
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Search,
    PostCard,
    NewsCard,
    MediaCard,
    ProductCard,
    ProfileCard,
    Sidebar,
  },
  head() {
    return {
      title: brand.starter.name + ' - Card Collection',
    };
  },
});
</script>
