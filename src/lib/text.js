
module.exports = {

	rootVars: function ( ssot ) {
		let props = {};

		ssot.typography.strength.list.forEach( intensity => {
			props[`--text-${intensity.name}`] = `hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), ${intensity.value})`,
				props[`$text-${intensity.name}`] = `hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), ${intensity.value})`
		} );
		return props;
	},

	rules: function ( ssot ) {
		let props = {};

		ssot.typography.strength.list.forEach( intensity => {
			props[`.text-${intensity.name}`] = {
				['color']: `hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), ${intensity.value})`
			};
		} );

		return props;
	}

}