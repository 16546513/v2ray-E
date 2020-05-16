const Top = require('./layout/Top.js')
const Bottom = require('./layout/Bottom.js')

module.exports = {
  name: 'App',
  template: `
    <div id="app">
      <Top></Top>
      <Bottom></Bottom>
    </div>
  `,
  components: {
    Top,
    Bottom,
  },
}