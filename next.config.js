const withSass = require('@zeit/next-sass')
module.exports = withSass(
  {
    target: 'serverless',
  distDir: '.next',
  },
  
  {
  /* config options here */
  cssModules: true
})