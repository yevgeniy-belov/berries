const plugin = require( 'tailwindcss/plugin' )
const getColors = require( './tw-generate-bg-colors' );
const tools = require( './tools' );
const corePlugs = require( './core-plugs' );
const SSOT = require( './src/SSOT.json' );
const borders = require( './src/lib/borders' );
const shadows = require( './src/lib/shadows' );
const text = require( './src/lib/text' );
const flexbox = require( './src/lib/flexbox' );

module.exports = {
	theme: {
		fontFamily: { 'sans': ['Open Sans'], 'mono': ['Roboto Mono'] },
		fontSize: tools.arrayToKeyValue( SSOT.typography.sizes.list ),
		container: {
			center: true,
		},
		extend: {
			colors: getColors.colors( SSOT.colors.list ),
		}
	},
	corePlugins: corePlugs,
	plugins: [
		plugin( function ( { addUtilities, addBase } ) {

			addBase( {
				'.theme': {
					...getColors.colorsVars( [...SSOT.colors.list] ),
					...getColors.layoutColorsVars( [...SSOT.layoutColors.list] ),
					...shadows.rootVars( SSOT ),
					...text.rootVars( SSOT ),
				}
			} );

			addBase( borders.vars( SSOT ) );

			addUtilities( borders.rules( SSOT ), ['hover', 'active', 'focus'] );
			addUtilities( flexbox.rules(), ['hover', 'active', 'focus'] );
			// 
			addUtilities( shadows.rules( SSOT ), ['hover'] );
			addUtilities( getColors.bgColor( 'bg', [...SSOT.colors.list, ...SSOT.layoutColors.list] ) ); // Must come before any modifiers.
			addUtilities( {
				'.interactive': { backgroundColor: 'hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), 0.05)' },
				'.interactive-hover': { backgroundColor: 'hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), 0.1)' },
				'.interactive-active': { backgroundColor: 'hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), 0.15)' },
				'.interactive-focus': { backgroundColor: 'hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), 0.05)' },
				'.interactive-disabled': { backgroundColor: 'hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), 0.05)' },
				// 
			}, ['hover', 'active', 'focus'] )
			addUtilities( getColors.customLightness( 'bg', SSOT.colors.list ), ['hover', 'focus'] ); // Must come after colors.
			addUtilities( getColors.transparencies( SSOT.transparencies.list ) ); // Must come after lightness.
			addUtilities( getColors.blurs( SSOT.blurs.list ) );
			addUtilities( text.rules( SSOT ), ['hover', 'active', 'focus'] );
			addUtilities( {
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1024px',
					},
					'@screen xl': {
						maxWidth: '1280px',
					},
				}
			} )
		} ),
	],
}
