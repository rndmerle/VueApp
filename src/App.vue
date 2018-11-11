<template>
  <div id='app'>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Site/Navbar'

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style lang='scss'>
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #8c67ef;
$table-cell-border: 20px solid $grey-lighter;
$navbar-height: 2 rem;

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700');

#app {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  overflow-y: auto !important;
}

// .iframe{
//   overflow: hidden;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   height: 94%;
//   width: 100%;
//   position: absolute;
//   top: 60px;
//   left: 0px;
//   right: 0px;
//   bottom: 0px;
// }

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
