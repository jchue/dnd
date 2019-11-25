<template>
  <div id="page-container">
    <Sidebar/>
    <transition name="fade">
      <main id="page-content">
        <header id="page-header">
          <h1>{{ adventurer.name }}</h1>
          <span class="subtitle">{{ adventurer.race }} {{ adventurer.class }}</span>
        </header>

        <Content />

        <PageEdit />
      </main>
    </transition>
  </div>
</template>

<script>
import utils from '../utils';
import Sidebar from './Sidebar.vue';
import PageEdit from './PageEdit.vue';

export default {
  components: { Sidebar, PageEdit },
  computed: {
    domain() {
      return utils.getDomain(this.$page.path);
    },
    pages() {
      return utils.getDomainPages(this.domain, this.$site.pages);
    },
    adventurer() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/index';

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

#page-header {
  margin-bottom: 30px;
}
</style>
