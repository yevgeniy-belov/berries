const ssot = require( './src/SSOT.json' );

module.exports = {

	hex: function ( colorName ) {
		let color = ssot.colors.list.find( color =>
			color.name === colorName
		)
		return color.hex;
	},

	layoutColorsVars: function ( data ) {
		let colors = {};
		data.forEach( colorItem => {
			colors[`--h-${colorItem.name}`] = `${colorItem.hsl[0]}`;
			colors[`--s-${colorItem.name}`] = `${colorItem.hsl[1]}`;
			colors[`--l-${colorItem.name}`] = `calc(var(--surface-lightness) + var(--lightness-delta-${colorItem.name}))`;
			colors[`--color-${colorItem.name}`] = `hsla( var(--h-${colorItem.name}), var(--s-${colorItem.name}), var(--l-${colorItem.name}), var(--opacity))`;
		} );
		return colors;
	},
	colorsVars: function ( data ) {
		let colors = {};
		data.forEach( colorItem => {
			colors[`--h-${colorItem.name}`] = `${colorItem.hsl[0]}`;
			colors[`--s-${colorItem.name}`] = `${colorItem.hsl[1]}`;
			colors[`--l-${colorItem.name}`] = `${colorItem.hsl[2]}`;
			colors[`--color-${colorItem.name}`] = `hsla( var(--h-${colorItem.name}), var(--s-${colorItem.name}), var(--l-${colorItem.name}), var(--opacity))`;
		} );
		return colors;
	},

	colors: function ( data ) {
		let colors = {};
		data.forEach( colorItem => {
			colors[`${colorItem.name}`] = `var(--color-${colorItem.name})`;
		} );
		return colors;
	},

	bgColor: function ( prefix, data ) {
		let colors = {};
		data.forEach( colorItem => {
			let colorValue = {};
			let selector = `.${prefix}-${colorItem.name}`;
			colorValue['--opacity'] = '1';
			colorValue['--l-factor'] = '1';
			colorValue['background-color'] =
				`hsla( var(--h-${colorItem.name}),
				var(--s-${colorItem.name}),
				calc( var(--l-${colorItem.name}) * var(--l-factor)),
				var(--opacity))`
				;
			colors[`${selector}`] = colorValue;
		} );
		return colors;
	},

	blurs: function ( data ) {
		let colors = { '.backdrop-blur-0': { '--tw-backdrop-blur': 'blur(0)' } };
		data.forEach( blur => {
			colors[`.backdrop-blur-${blur.name}`] = { '--tw-backdrop-blur': `blur(${blur.value}px)` };
		} );
		return colors;
	},

	transparencies: function ( transparencies ) {
		let colors = {};
		transparencies.forEach( transparency => {
			colors[`.bg-a-${transparency.name}`] = { '--opacity': `${transparency.value}` };
		} );
		return colors;
	},

	modularLightness: function ( shades ) {
		let rules = {};
		shades.forEach( shade => {
			rules[`.bg-${shade.name}`] = { '--l-factor': `${shade.value}` };
		} );
		return rules;
	},
	customLightness: function ( prefix, colors ) {
		let rules = {};
		colors.forEach( color => {
			color.lightness.forEach( lightness => {
				let colorValue = {};
				let lightnessName = "";
				if ( lightness.name !== "default" ) {
					lightnessName = `-${lightness.name}`;
				}
				colorValue['--opacity'] = '1';
				colorValue['--l-factor'] = '1';
				colorValue['--l-factor'] = `${lightness.value}`;
				colorValue['background-color'] = `hsla( var(--h-${color.name}), var(--s-${color.name}), calc( var(--l-${color.name}) * var(--l-factor)), var(--opacity))`;
				rules[`.${prefix}-${color.name}${lightnessName}`] = colorValue;
			} )

		} );
		return rules;
	}
}