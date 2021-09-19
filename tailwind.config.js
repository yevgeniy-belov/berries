const plugin = require( 'tailwindcss/plugin' )
const keep = require( './keep' );
const tailwindConfigChanger = require( './tailwind-config-changer' );

module.exports = {
  presets: [
    require( './tailwind-berries.config.js' )
  ],
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './keep/data.json'
  ],

  plugins: [
    plugin( function ( { } ) {
      const regexp = /(class="([^"]*)")/g;
      keep.generate( [
        'http://localhost:4000/home',
        'http://localhost:4000/compact',
        'http://localhost:4000/shadows',
        'http://localhost:4000/typography',
        'http://localhost:4000/kit',
        'http://localhost:4000/borders',
      ], regexp );
    } ),
    plugin( function ( {  } ) {

      /*--------------------------------------------------------------------------
         Do not remove the block below!
         It watches changes happening in the custom plugins and reloads this config file (tailwind.config.js) without restarting vite.
         The whole method is a hack but it works. So I don't care.
      */
      const watchList = [
        './tailwind-berries.config.js',
        './src/lib/**/*.js',
        './src/SSOT.json',
      ];
      tailwindConfigChanger.watch( watchList );
      /*
       tailwindConfigChanger state: a.
      --------------------------------------------------------------------------*/
    } ),
  ],
}
