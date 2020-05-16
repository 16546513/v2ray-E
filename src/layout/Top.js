const Aside = require('../components/Aside.js')
const Edit = require('../components/Edit.js')

module.exports = {
  name: 'Top',
  template: `
    <div class="top">
      <Aside @edit="edit"></Aside>
      <Edit :info="info"></Edit>
    </div>
  `,
  data() {
    return {
      info: null,
    }
  },
  components: {
    Aside,
    Edit,
  },
  methods: {
    edit(json) {
      this.info = json
    },
  },
}
