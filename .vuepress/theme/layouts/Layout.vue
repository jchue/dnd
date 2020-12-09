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
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

h1 {
  line-height: 0.9;
  font-family: Calistoga;
  font-size: 2.625rem;
  font-weight: normal;
  margin: 0 0 1.5rem 0;

  .header-anchor {
    margin: 0 -0.313rem 0 -1.8rem;
  }
}

h2 {
  font-family: 'Roboto Slab';
  font-size: 1.75rem;
  line-height: 1;
  margin: 0 0 1.5rem 0;

  .header-anchor {
    margin: 0 -0.125rem 0 -1.213rem;
  }
}

h1,
h2,
h3,
h4 {
  .header-anchor {
    display: none;
    font-size: 0.85em;
    font-weight: normal;
  }

  @media (min-width: $breakpoint-charlie) {
    &:hover .header-anchor {
      display: inline;
    }
  }
}

ul {
  margin: 0 0 1.5rem 0;
}

p {
  line-height: 1.75;
  margin: 0 0 1.5rem 0;
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
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
}

img {
  margin: 0 0 1.5rem 0;

  &.align-left {
    float: left;
    margin-right: 1.5rem;
  }
}

#site-header {
  background-color: #26282a;
  box-sizing: border-box;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  @media (max-width: $breakpoint-charlie) {
    padding: 0 0.625rem;
  }
}

#nav-toggle {
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 1rem;
  line-height: 1.75;
  margin: 0 1rem 0 -4.25rem;
  padding: 0.625rem;
  position: static;
  transition: margin 0.1s;
  width: 3rem;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "+";
  }

  &.opened:after {
    content: "-";
  }

  @media (max-width: $breakpoint-charlie) {
    &.page,
    &.adventurer {
      display: inline-block;
      margin: 0 0 0 -0.625rem;
    }
  }
}

#site-title {
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.75;
  padding: 0.625rem;
  text-transform: uppercase;
}

#site-navigation {
  display: inline-block;
  float: right;
  font-size: 1rem;
  line-height: 1.75;

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
    padding: 0.625rem;

    &:hover {
      color: #fff;
    }
  }
}

#site-body {
  margin-top: 3rem;
}

#page-container {
  display: flex;
}

#page-content {
  overflow: auto;
  padding: 3.125rem 6.25rem;
  height: 100%;

  @media (max-width: $breakpoint-alpha) {
    padding: 3.125rem;
  }

  @media (max-width: $breakpoint-bravo) {
    padding: 1.875rem;
  }

  @media (max-width: $breakpoint-charlie) {
    padding: 1.875rem 1.25rem;
  }
}

.subtitle {
  display: block;
  font-family: Arvo;
  font-size: 1.25rem;
  line-height: 1.3;
  margin-top: -1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
