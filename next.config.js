const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  target: 'serverless',
  distDir: '.next',
  cssModules: true
})