<template>
  <aside id="page-sidebar" v-bind:class="{opened: menuOpened}">
    <nav id="page-nav">
      <ul>
        <li v-for="page in pages" v-bind:key="page.key">
          <router-link v-bind:to="page.path" class="page-title">{{ page.frontmatter.name || page.title }}</router-link>

          <ul v-if="page.headers">
            <li v-for="header in page.headers" v-bind:key="header.slug"><router-link v-bind:to="page.path + '#' + header.slug">{{ header.title }}</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import utils from '../utils';

export default {
  name: 'Sidebar',
  props: ['menuOpened'],
  computed: {
    domain() {
      return utils.getDomain(this.$page.path);
    },
    pages() {
      return utils.getDomainPages(this.domain, this.$site.pages);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/index';

#page-sidebar {
  background-color: #fff;
  bottom: 0;
  border-right: 1px solid #eaecef;
  box-sizing: border-box;
  flex-basis: content;
  flex-shrink: 0;
  left: 0;
  margin: 0;
  max-width: 22rem;
  overflow-y: auto;
  padding: 3.125rem 1.875rem;
  top: 3rem;
  transition: left 0.1s ease-out;
  z-index: 1;

  @media (max-width: $breakpoint-bravo) {
    max-width: 16rem;
    padding: 1.875rem;
  }

  @media (max-width: $breakpoint-charlie) {
    position: fixed;
    max-width: 100%;
    width: 100%;
    left: -100%;

    &.opened {
      left: 0;
    }
  }
}

#page-nav {
  ul {
    padding: 0;

    ul a {
      padding-left: 1.25rem;

      @media (max-width: $breakpoint-bravo) and (min-width: $breakpoint-charlie){
        padding-left: 0;
      }
    }
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: $textColor;
    display: block;
    padding: 0.313rem 0;

    &:hover {
      color: $accentColor;
    }
  }
}

.page-title {
  font-family: 'Roboto Slab';
  font-size: 1.125rem;
}
</style>
