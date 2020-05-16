const Version = require('../components/Version.js')
const Status = require('../components/Status.js')

module.exports = {
  name: 'Bottom',
  template: `
    <div class="bottom">
      <Version></Version>      
      <Status></Status>
    </div>
  `,
  components: {
    Version,
    Status,
  },
}
