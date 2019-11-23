<template>
  <div class="site-container">
    <header id="site-header">
      <router-link v-bind:to="$localePath" id="site-title">
        <span v-if="$siteTitle">{{ $siteTitle }}</span>
      </router-link>

      <nav v-if="nav.length" id="site-navigation">
        <ul>
          <li v-for="item in nav"><router-link v-bind:to="item.link" class="nav-link">{{ item.text }}</router-link></li>
        </ul>
      </nav>
    </header>
    <section id="site-body" v-bind:class="{ home: this.$page.frontmatter.home, page: !this.$page.frontmatter.home }">
      <transition name="fade">
        <main id="page-content">
          <h1>404</h1>
          <p>{{ getMsg() }}</p>
          <router-link to="/">Take me home.</router-link>
        </main>
      </transition>
    </section>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  components: {
    Home,
    Page
  },
  computed: {
    nav () {
      return this.$site.themeConfig.nav
    },
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
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

#site-header {
  background-color: #26282a;
  box-sizing: border-box;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
