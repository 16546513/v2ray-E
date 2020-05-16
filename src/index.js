const Vue = require('vue/dist/vue')

const App = require('./App.js')

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App,
  },
})
