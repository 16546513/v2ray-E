const cp = require('child_process')
const path = require('path')

module.exports = {
  name: 'Status',
  template: `
    <div class="status">
      <button class="save" @click="save">保存</button>
      <button class="connect" @click="connect">连接</button>
    </div>
  `,
  methods: {
    save() {
      // console.log('save')
    },
    connect() {
      cp.spawn(
        path.join(__dirname, '../../assets/v2ray/v2ray.exe'),
        ['-config=' + path.join(__dirname, '../../assets/v2ray/config.json')],
        {
          detached: true,
        }
      )
    },
  },
}
