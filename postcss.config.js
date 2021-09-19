let test = require( './postcss-test-plugin' );

module.exports = {
  plugins: [
    require( 'postcss-import' ),
    require( 'postcss-nested' ),
    require( 'postcss-simple-vars' ),
    require( 'postcss-mixins' ),
    require( 'postcss-extend' ),
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
    test(),
  ]
}