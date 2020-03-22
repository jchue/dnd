<template>
  <div class="site-container">
    <header id="site-header">
      <button v-on:click="toggleNav" id="nav-toggle" v-bind:class="[{opened: menuOpened}, template]"></button>

      <router-link v-bind:to="$localePath" id="site-title">
        <span v-if="$siteTitle">{{ $siteTitle }}</span>
      </router-link>

      <nav v-if="nav.length" id="site-navigation">
        <ul>
          <li v-for="page in nav" v-bind:key="page.link"><router-link v-bind:to="page.link" class="nav-link">{{ page.text }}</router-link></li>
        </ul>
      </nav>
    </header>
    <section id="site-body" v-bind:class="template">
      <transition name="fade" mode="out-in" appear>
        <Home v-if="template == 'home'"/>
        <Adventurers v-else-if="template == 'adventurers'"/>
        <Adventurer v-else-if="template == 'adventurer'"/>
        <Page v-else v-bind:menuOpened="menuOpened"></Page>
      </transition>
    </section>
  </div>
</template>

<script>
import Home from '../components/Home.vue';
import Adventurers from '../components/Adventurers.vue';
import Adventurer from '../components/Adventurer.vue';
import Page from '../components/Page.vue';

export default {
  components: {
    Home,
    Adventurer,
    Adventurers,
    Page,
  },
  data: () => ({ menuOpened: false }),
  computed: {
    template() {
      return this.$page.frontmatter.template || 'page';
    },
    nav() {
      return this.$site.themeConfig.nav;
    },
  },
  methods: {
    toggleNav() {
      if (this.menuOpened) {
        this.menuOpened = false;
      } else {
        this.menuOpened = true;
      }
    },
  },
  watch: {
    $route() {
      this.menuOpened = false;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Calistoga&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

@import '../styles/index';

body {
  color: $textColor;
  font-family: 'Open Sans';
  font-size: 14px;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: Calistoga;
  font-size: 40px;
  font-weight: normal;
  margin: 0 0 25px 0;

  .header-anchor {
    margin-left: -32.1px;
  }
}

h2 {
  font-family: 'Roboto Slab';
  font-size: 28px;
  margin: 0 0 25px 0;

  .header-anchor {
    margin-left: -21.45px;
  }
}

h1,
h2,
h3,
h4 {
  .header-anchor {
    display: none;
    font-size: .85em;
    font-weight: normal;
  }

  &:hover .header-anchor {
    display: inline;
  }
}

ul {
  margin: 0 0 30px 0;
}

p {
  line-height: 1.8;
  margin: 0 0 25px 0;
}

a {
  color: $accentColor;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
}

blockquote {
  box-sizing: border-box;
  color: lighten($textColor, 55%);
  border-left: 8px solid lighten($textColor, 75%);
  margin: 0 0 30px 0;
  padding-left: 30px;
}
img {
  margin: 0 0 20px 0;

  &.align-left {
    float: left;
    margin-right: 20px;
  }
}

#site-header {
  background-color: #26282a;
  box-sizing: border-box;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

#site-title {
  color: #fff;
  display: inline-block;
  line-height: 28px;
  padding: 10px;
  text-transform: uppercase;
}

#site-navigation {
  display: inline-block;
  float: right;
  line-height: 28px;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    list-style-type: none;
  }

  a {
    color: #a5afba;
    display: inline-block;
    padding: 10px;

    &:hover {
      color: #fff;
    }
  }
}

#site-body {
  margin-top: 48px;
}

#page-content {
  overflow: auto;
  height: 100%;
}

.subtitle {
  display: block;
  font-family: Arvo;
  font-size: 20px;
  line-height: 1.3;
  margin-top: -25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#nav-toggle {
  background-color: #000;
  border: none;
  bottom: 0;
  color: #fff;
  display: none;
  font-size: 16px;
  line-height: 28px;
  margin: 0 0 0 -20px;
  padding: 10px;
  width: 48px;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "+";
  }

  &.opened:after {
    content: "-";
  }
}

#page-container {
  display: flex;
}

#page-sidebar {
  flex-basis: content;
  flex-shrink: 0;
  max-width: 350px;
  padding: 50px 30px;
  transition: left .1s ease-out;
  z-index: 1;
}

#page-sidebar + #page-content {
  padding: 50px 100px;
}

@media (max-width: $breakpoint-alpha) {
  #page-sidebar + #page-content {
    padding: 50px 50px;
  }
}

@media (max-width: $breakpoint-bravo) {
  #page-sidebar {
    max-width: 250px;
    padding: 30px 30px;
  }

  #page-sidebar + #page-content {
    padding: 30px 50px;
  }
}

@media (max-width: $breakpoint-charlie) {
  .page,
  .adventurer {
    &#nav-toggle {
      display: inline-block;
    }
  }

  #page-sidebar {
    position: fixed;
    max-width: 100%;
    width: 100%;
    left: -100%;

    &.opened {
      left: 0;
    }
  }
}
</style>
