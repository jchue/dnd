<template>
  <div id="page-container">
    <aside id="page-sidebar">
      <nav id="page-nav">
        <ul>
          <li v-for="page in pages" v-bind:key="page.key">
            <router-link v-bind:to="page.path" class="page-title">{{ page.title }}</router-link>

            <ul v-if="page.headers">
              <li v-for="header in page.headers" v-bind:key="header.slug"><router-link v-bind:to="page.path + '#' + header.slug">{{ header.title }}</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
    <main id="page-content">
      <transition name="fade">
        <Content />
      </transition>
      <PageEdit />
    </main>
  </div>
</template>

<script>
import PageEdit from './PageEdit.vue';

export default {
  components: { PageEdit },
  computed: {
    pages() {
      const pages = [];

      // Get domain of current page
      const thisDomain = this.domain(this.$page.path);

      // Get other pages in the same domain
      const sitePages = this.$site.pages;

      sitePages.forEach((page) => {
        const thatDomain = this.domain(page.path);
        if (thatDomain === thisDomain) {
          pages.push(page);
        }
      });

      // Sort the pages
      pages.sort((a, b) => {
        // First compare the length of the paths
        if (a.path.length < b.path.length) {
          return -1;
        }
        if (a.path.length > b.path.length) {
          return 1;
        }

        // If the lengths are the same, then compare the values themselves (alphabetically)
        if (a.path < b.path) {
          return -1;
        }
        if (a.path > b.path) {
          return 1;
        }

        // Otherwise they are the same
        return 0;
      });

      return pages;
    },
  },
  methods: {
    domain(path) {
      // Are there any slashes (>= 0)?
      const slash = path.indexOf('/');

      if (slash >= 0) {
        // Slash exists

        const firstSlash = path.indexOf('/');
        let startPos;
        if (firstSlash > 0) {
          // Path does not start with slash
          startPos = 0;
        } else {
          // Path starts with slash
          startPos = firstSlash + 1;
        }

        const secondSlash = path.indexOf('/', startPos);
        let endPos;
        if (secondSlash > -1) {
          // Second slash exists
          endPos = path.indexOf('/', startPos);
          return path.substring(startPos, endPos);
        }

        // Second slash does not exist
        return path.substring(startPos);
      }

      // No slash, so return as-is
      return path;
    },
  },
  props: ['sidebarItems'],
};
</script>

<style lang="scss">
@import '../styles/index';

#page-sidebar {
  background-color: #fff;
  bottom: 0;
  border-right: 1px solid #eaecef;
  box-sizing: border-box;
  display: table-cell;
  left: 0;
  margin: 0;
  overflow-y: auto;
  padding: 50px 30px;
  position: fixed;
  top: 48px;
  width: 350px;
  z-index: 10;
}

.page #page-content {
  margin-left: 350px;
  padding: 50px 100px;

  h1,
  h2,
  h3,
  h4 {
    margin-top: -50px;
    padding-top: 50px;
  }
}

#page-nav {
  ul {
    padding: 0;

    ul a {
      padding-left: 20px;
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
    padding: 5px 0;

    &:hover {
      color: $accentColor;
    }
  }
}

.page-title {
  font-family: 'Roboto Slab';
  font-size: 18px;
}
</style>
