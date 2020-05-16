const { version } = require('../../package.json')

module.exports = {
  name: 'Version',
  template: `
    <div class="version">
      当前版本：v${version}
    </div>
  `,
}
