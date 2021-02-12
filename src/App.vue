<template>
  <v-app id="inspire" style="background: #f4f6f9">
    <menu-bar />

    <v-content>
      <headline />

      <v-sheet id="PORTFOLIO">
        <portfolio />
      </v-sheet>

      <v-sheet color="transparent" id="ABOUT">
        <about />
      </v-sheet>

      <v-sheet id="TEAM">
        <team />
      </v-sheet>

      <v-sheet dark id="CONTACT">
        <contact />
      </v-sheet>
    </v-content>

    <footer-bar />
  </v-app>
</template>

<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import FooterBar from './components/FooterBar.vue';
import Headline from './components/Headline.vue';
import MenuBar from './components/MenuBar.vue';
import Portfolio from './components/Portfolio.vue';
import Team from './components/Team.vue';

export default {
  components: { 
    MenuBar, 
    Headline, 
    Portfolio, 
    About, 
    Team, 
    Contact, 
    FooterBar }
};
</script>

<style lang="scss">
.display-2,
.body-2 {
  .welcome {
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    font-style: italic;
  }
}
</style>
