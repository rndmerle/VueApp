<template>
  <section class="section is-small" >
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3" v-for="item in items" :key="item.id">
          <div class="card card-equal-height">
            <router-link :to="item.link" class="linkSpanner"></router-link>
            <div class="card-content">
              <p class="title">{{ item.title }}</p>
              <div class="content">
                <p>{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'School',
  data: function () {
    return {
      items: [
        {
          id: '1',
          title: 'CRUD',
          link: '/Apps/CRUD',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
}
</script>

<style>
</style>
