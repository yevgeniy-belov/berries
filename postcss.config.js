let test = require( './postcss-test-plugin' );

module.exports = {
  plugins: [
    require( 'postcss-import' ),
    require( 'postcss-nested' ),
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
    test( ),
  ]
}
