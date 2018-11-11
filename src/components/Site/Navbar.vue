<template>
  <nav class="navbar is-dark is-fixed-top">
    <div class="container">

      <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            Vue App
          </router-link>
        <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
        <div class="navbar-end">

          <router-link to="/" class="navbar-item">Home</router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">Docs</a>
          </div> -->
          <router-link to="/About" class="navbar-item">About</router-link>

        </div>
      </div>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleMenu: function () {
        this.navIsActive = !this.navIsActive
      }
    }
  }
</script>

<style scoped>

.navbar {
  /* max-height: 34px; */
  display: inline-block;
  vertical-align: middle;
  /* padding-top: 0px; */
  /* padding-bottom: 40px; */
  margin-bottom: 40px;
}

.navbar-brand {
  font-size: 16px;
}

</style>
