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
  margin: 0 6.25rem;
  text-align: center;

  h1 {
    font-size: 4.375rem;
    line-height: 0.9;
    margin-bottom: 2.5rem;
  }

  .subtitle {
    display: block;
    font-family: Arvo;
    font-size: 1.625rem;
    margin: 0 0 0.625rem 0;
    text-transform: uppercase;
  }

  .description {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
  }

  @media (max-width: $breakpoint-bravo) {
    margin: 0 3.125rem;
  }

  @media (max-width: $breakpoint-charlie) {
    align-self: flex-start;
    margin: 1.25rem 0;
  }
}
</style>
