const repl = require('repl')
const { promisify } = require('util')
const fs = require('fs')
const readdir = promisify(fs.readdir)

const start = dir => {
  global.eis = {}
  readdir(dir)
    .then(filenames => {
      filenames.forEach(filename => {
        console.log(`loading ${dir}/${filename}`)
        try {
          const module = require()
          console.log(module)
          global.eis[filename] = module
        } catch (e) {
          console.log(`${e}${filename} is not module.`)
        }
      })
    })
    .then(() => repl.start('EIS > '))
}

module.exports = {
  start,
}
