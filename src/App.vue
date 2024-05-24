


<script>
import AppHeader from './components/navBarre.vue';
import AppFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<template>
  <app-header></app-header>
  <router-view />
  <app-footer></app-footer>

</template>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap ");
  #app {
    color: rgba(241, 223, 221, 0.925);
    background: url(./assets/fond.png);
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Roboto mono";
    font-size: 1.1rem;
    letter-spacing: -1px;
  }
</style>

