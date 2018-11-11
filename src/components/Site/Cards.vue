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
  name: 'Cards',
  data: function () {
    return {
      items: [
        {
          id: '1',
          title: 'School',
          link: '/School',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: '2',
          title: 'Apps',
          link: '/Apps',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
}
</script>

<style>
.title {
  font-size: 16px;
  font-weight: 500;
  /* text-align: center; */
  margin-bottom: 10px !important;
}

.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-equal-height .card-footer {
  margin-top: auto;
}

.card {
  padding: 10px;
  border-radius: 5px;
  border-style: solid;
  border-color: lightgrey;
  border-width: 1px;
}

.card:hover {
  border-color: blue;
  border-width: 1px;
}

.card-content{
  padding: 10px;
}

.linkSpanner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
