
var postcss = require( 'postcss' );
var fs = require( 'fs' );

module.exports = ( opts = {} ) => {
	opts = opts || {};
	
	return function ( root, css, result ) {
		postcss().process( css, { from: './index.css' } ).then( result => {
			// console.log(result.css);
			fs.writeFileSync( './tmp/preview.css', result.css, function ( err, result ) {
				if ( err ) console.log( 'error', err );
			} );
		})

	};
};

module.exports.postcss = true;