const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-preset-env')({
      browsers: "last 2 versions"
    }),
    autoprefixer: {},
    require('cssnano')({
        preset: 'default',
    }),
    purgecss({
      content: ['./**/*.html'],
      keyframes: true
    })
  ]
}
