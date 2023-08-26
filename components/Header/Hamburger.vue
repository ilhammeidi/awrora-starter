<template>
  <div>
    <v-app-bar
      v-scroll="handleScroll"
      :class="{ fixed: fixed, 'no-shadow': openDrawer }"
      class="header"
      fixed
      dense
      app
      height="auto"
    >
      <v-container>
        <div class="header-content">
          <nav class="nav-menu">
            <div class="hamburger-logo">
              <v-btn
                :class="{ 'is-active': openDrawer }"
                class="hamburger hamburger--spin mobile-menu"
                size="small"
                icon
                @click.stop="handleToggleOpen"
              >
                <span class="hamburger-box">
                  <span class="bar hamburger-inner" />
                </span>
              </v-btn>
              <div class="logo center">
                <a href="#home">
                  <logo type="only" />
                </a>
              </div>
            </div>
            <user-menu />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="hamburger-nav">
          <ul class="menu">
            <li
              v-for="(item, index) in menuList"
              :key="index"
              :style="{ 'animation-duration': index * 0.15 + 's' }"
            >
              <v-btn
                variant="text"
                :href="item.link"
                :class="{ active: activeMenu === item.name }"
                @click="scrollToMyEl(item.name)"
              >
                {{ $t('starter.header_'+item.name) }}
              </v-btn>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { ref, inject } from 'vue';
import { useRouter } from '#app';
import Logo from '../Logo';
import UserMenu from './TopNav/UserMenu';
import navMenu from './data/single';

let counter = 0;
function createData(name, link, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    link,
    offset,
  };
}

export default {
  components: {
    UserMenu,
    Logo,
  },
  setup() {
    const openDrawer = ref(false);

    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();
      openDrawer.value = false;

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    function handleToggleOpen() {
      openDrawer.value = !openDrawer.value;
    }

    return {
      scrollToMyEl,
      openDrawer,
      handleToggleOpen,
    };
  },
  data() {
    return {
      fixed: false,
      navOffset: 20,
      activeMenu: '',
      sections: {},
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
      ],
    };
  },
  mounted() {
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 200;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
          console.log(this.activeMenu);
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
  },
};
</script>
