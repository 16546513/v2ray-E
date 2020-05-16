const fs = require('fs')
const path = require('path')
const homePath = require('os').homedir()

const dirName = path.join(homePath, '.v2rayE')

if (!fs.existsSync(dirName)) {
  createDir()
}
function createDir() {
  fs.mkdirSync(dirName)
  fs.copyFileSync(
    path.join(__dirname, '../../configs/default.json'),
    path.join(dirName, 'default.json')
  )
}

const configs = readDir()
function readDir() {
  const files = fs.readdirSync(dirName)
  return files.map((fileName) => {
    let json = require(path.join(dirName, fileName))
    json.name = fileName.split('.')[0]
    return json
  })
}

module.exports = configs
