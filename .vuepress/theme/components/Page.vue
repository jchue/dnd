<template>
  <div id="page-container">
    <Sidebar/>
    <main id="page-content">
      <transition name="fade">
        <Content />
      </transition>
      <PageEdit />
    </main>
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
</style>
