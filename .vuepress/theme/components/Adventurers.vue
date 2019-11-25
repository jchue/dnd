<template>
  <main id="page-content">
    <h1>{{ title }}</h1>

    <ul class="adventurer-list">
      <li v-for="adventurer in adventurers" v-bind:key="adventurer.key"><router-link v-bind:to="adventurer.path" v-bind:style="'background-image: url(' + adventurer.photo + ')'" class="adventurer-tile"><span class="adventurer-name">{{ adventurer.name }}</span></router-link></li>
    </ul>
    <Content/>
  </main>
</template>

<script>
import _ from 'lodash';
import utils from '../utils';

export default {
  name: 'Adventurers',
  data() {
    return {
      title: 'Adventurers',
    };
  },
  computed: {
    domain() {
      return utils.getDomain(this.$page.path);
    },
    adventurers() {
      const pages = utils.getDomainPages(this.domain, this.$site.pages);
      const adventurers = [];

      pages.forEach((page) => {
        // Collapse frontmatter attributes to page attributes
        const adventurer = _.cloneDeep(page);
        _.merge(adventurer, adventurer.frontmatter);
        delete adventurer.frontmatter;

        // Build new array with this flat structure
        adventurers.push(adventurer);
      });

      // Only return items with a photo
      return adventurers.filter((adventurer) => adventurer.photo);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');

@import '../styles/index';

h1 {
  text-align: center;
}

#page-content {
  padding: 50px 100px;
}

.adventurer-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
  }
}

.adventurer-tile {
  background-position: center center;
  background-size: cover;
  display: inline-block;
  height: 250px;
  position: relative;
  width: 250px;

  .adventurer-name {
    background-color: rgba(0, 0, 0, .4);
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-family: Arvo;
    font-size: 20px;
    left: 0;
    opacity: 0;
    padding-top: 50%;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    transition: opacity .15s;
  }

  &:hover {
    .adventurer-name {
      opacity: 1;
    }
  }
}
</style>
