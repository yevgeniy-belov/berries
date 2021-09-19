const plugin = require( 'tailwindcss/plugin' )
const getColors = require( './tw-generate-bg-colors' );
const tools = require( './tools' );
const corePlugs = require( './core-plugs' );
const SSOT = require( './src/SSOT.json' );
const borders = require( './src/lib/borders' );
const shadows = require( './src/lib/shadows' );
const textStrength = require( './src/lib/text-strength' );
const flexbox = require( './src/lib/flexbox' );

module.exports = {
	theme: {
		fontFamily: { 'Open-Sans': ['Open Sans'], 'Roboto-Mono': ['Roboto Mono'] },
		fontSize: tools.arrayToKeyValue( SSOT.typography.sizes.list ),
		container: {
			center: true,
		},
		colors: getColors.colors( SSOT.colors.list ),
	},
	corePlugins: corePlugs,
	plugins: [
		plugin( function ( { addUtilities, addBase } ) {
			/*
			-------------------------------------------------------------------------------
			The order below matters - it matches the order of the generated CSS content!
			-------------------------------------------------------------------------------
			*/
			addBase( {
				'.theme': {
					...getColors.colorsVars( [...SSOT.colors.list] ),
					...getColors.layoutColorsVars( [...SSOT.layoutColors.list] ),
					...shadows.rootVars( SSOT ),
					...textStrength.rootVars( SSOT ),
					...borders.vars( SSOT ),
				},
			}
			);
			addUtilities( borders.rules( SSOT ), ['hover', 'active', 'focus'] );
			addUtilities( flexbox.rules(), ['hover', 'active', 'focus'] );
			addUtilities( shadows.rules( SSOT ), ['hover'] );
			addUtilities( getColors.bgColor( 'bg', [SSOT.colors.list, ...SSOT.layoutColors.list] ) ); // Must come before any modifiers.
			addUtilities( getColors.customLightness( 'bg', SSOT.colors.list ), ['hover', 'focus'] ); // Must come after colors.
			addUtilities( getColors.transparencies( SSOT.transparencies.list ) ); // Must come after lightness.
			addUtilities( getColors.blurs( SSOT.blurs.list ) );
			addUtilities( textStrength.rules( SSOT ), ['hover', 'active', 'focus'] );
		} ),
	],
}
