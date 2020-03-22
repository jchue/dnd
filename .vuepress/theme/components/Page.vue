<template>
  <div id="page-container">
    <Sidebar v-bind:menuOpened="menuOpened"/>
    <main id="page-content">
      <transition name="fade">
        <Content />
      </transition>
      <PageEdit />
    </main>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import PageEdit from './PageEdit.vue';

export default {
  name: 'Page',
  props: ['menuOpened'],
  components: { Sidebar, PageEdit },
};
</script>

<style lang="scss">
@import '../styles/index';

.page #page-content {
  h1,
  h2,
  h3,
  h4 {
    margin-top: -50px;
    padding-top: 50px;
  }
}
</style>
