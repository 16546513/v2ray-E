const configs = require('../fs/read')

module.exports = {
  name: 'Aside',
  template: `
    <div class="aside">
      <div class="aside-config" v-for="(file, i) in configs" :key="i" @click="handleClick($event, i)">{{file.name}}</div>
      <div class="aside-new">新建配置</div>
    </div>
  `,
  data() {
    return {
      configs,
    }
  },
  methods: {
    handleClick(_, i) {
      this.$emit('edit', this.configs[i])
    },
  },
}
