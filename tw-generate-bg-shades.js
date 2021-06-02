module.exports = {
	generate: function ( prefix, data, shades ) {
		let colors = {};
		data.forEach( name => {
			let color =
				`var(--bg-a-${name})`
				;
			colors[`${prefix}${name}`] = color;
			if ( shades !==undefined ) {
				shades.forEach( shade => {
					let shadeName = shade !== 'default' ? `-${shade}` : '';
					color = `var(--color-${name}${shadeName})`;
					colors[`${prefix}${name}${shadeName}`] = color;
				});
			}
		} );
		return colors;

	}
}
