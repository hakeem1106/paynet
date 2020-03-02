const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass({
  /* config options here */
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  cssModules: true
}))

