<template>
  <main id="page-content" v-bind:style="'background-image: url(' + $withBase(data.heroImage) +
  '); background-position: center; background-size: cover;'">
    <header class="hero">
      <span class="subtitle">{{ data.subtitle }}</span>
      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText }}</h1>

      <p class="description">
        {{ data.description }}
      </p>
    </header>

    <Content/>
  </main>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');

@import '../styles/index';

.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  #page-content {
    display: flex;
  }
}

.hero {
  align-self: center;
  color: #fff;
  flex-grow: 1;
  margin: 0 100px;
  text-align: center;

  h1 {
    font-size: 70px;
    line-height: 1;
    margin-bottom: 40px;
  }

  .subtitle {
    display: block;
    font-family: Arvo;
    font-size: 26px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .description {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
  }
}
</style>
