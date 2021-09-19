
var postcss = require( 'postcss' );
var fs = require( 'fs' );

module.exports = ( opts = {} ) => {
	opts = opts || {};
	return function ( css ) {
		postcss( [] ).process( css ).then( result => {
			fs.writeFileSync( './tmp/preview.css', result.css.toString(), function ( err, result ) {
				if ( err ) console.log( 'error', err );
			} );
		} )
	};
};

module.exports.postcss = true;