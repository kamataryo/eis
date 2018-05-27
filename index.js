const program = require('commander')
const { start } = require('./src/cli')

program
  .command('start <dir>', 'start EIS shell with given <dir> directory')
  .action((dir, cmd) => start(dir))
  .parse(process.argv)
