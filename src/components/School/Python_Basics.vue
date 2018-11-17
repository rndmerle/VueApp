<template>
  <div class="rmarkdown">

    <iframe
    id="myIframe"
    :src="iframe.src"
    frameborder="0"
    v-on:load="load()"
    v-show="iframe.loaded"
    style="overflow:hidden; overflow-x:hidden; overflow-y:hidden; height:90%; width:100%; position:absolute; top:50px; left:0px; right:0px; bottom:0px"
    height="100%"
    width="100%"/>


  </div>
</template>

<script>

export default {
  name: 'Python_Basics',
  data () {
    return {
      iframe: { src: '../../static/iFrame.html', loaded: false }
    }
  },
  mounted: function () {
    // Listen to message from iframe element
    window.addEventListener('message', function (msg) {
      var message = msg.data
      var locationHash = message.substring(message.indexOf('#'))
      // console.log(locationHash)

      if (message.startsWith('locHash:')) {
        var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + locationHash
        window.history.pushState({ path: newurl }, '', newurl)
      }
    })
  },
  methods: {
    load: function () {
      this.iframe.loaded = true
      var hash = window.location.hash

      if (hash) {
        document.getElementById('myIframe').contentWindow.postMessage(hash, '*')
        console.log(hash)
      } else {
        console.log('No hash!')
      }
    }
  }
}
</script>

<style scoped>
html {
  overflow: hidden;
}

body {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}
</style>
