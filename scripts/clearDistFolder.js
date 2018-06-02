// This script removes files
var rimraf = require('rimraf')

rimraf('dist/*', () => {
  const chalk = require('chalk')
  console.log(chalk.green('\nBuild Folder cleared\n'))
})
