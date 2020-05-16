module.exports = {
  name: 'Edit',
  template: `
    <div class="edit" v-if="info">
      <div class="inb">
        <div class="item protocol">
          入口协议：
          <select name="protocol-in">
            <option :value="inb.protocol">{{inb.protocol}}</option>
          </select>
        </div>
        <div class="item listen">
          ip：
          <input type="text" :value="inb.listen"/>
        </div>
        <div class="item port">
          port：
          <input type="text" :value="inb.port"/>
        </div>
      </div>
      <div class="out">
        <div class="item protocol">
          出口协议：
          <select name="protocol-out">
            <option :value="out.protocol">{{out.protocol}}</option>
          </select>
        </div>
        <div class="item listen">
          ip：
          <input type="text" :value="out.ip"/>
        </div>
        <div class="item port">
          port：
          <input type="text" :value="out.port"/>
        </div>
      </div>
    </div>
  `,
  props: ['info'],
  computed: {
    inb() {
      return this.info.inbounds[0]
    },
    out() {
      const out = this.info.outbounds[0]
      return {
        protocol: out.protocol,
        ip: out.settings.vnext[0].address,
        port: out.settings.vnext[0].port,
      }
    },
  },
}
