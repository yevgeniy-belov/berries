
module.exports = {

	rootVars: function ( ssot ) {
		let props = {};

		ssot.typography.intensity.list.forEach( intensity => {
			props[`--text-${intensity.name}`] = `hsla(var(--fg-hue), var(--fg-saturation), var(--fg-lightness), ${intensity.value})`,
				props[`--text-white-${intensity.name}`] = `hsla(var(--fg-hue), var(--fg-saturation), 100%, ${intensity.value})`
			props[`--text-black-${intensity.name}`] = `hsla(var(--fg-hue), var(--fg-saturation), 0%, ${intensity.value})`
		} );
		return props;
	},

	rules: function ( ssot ) {
		let props = {};

		ssot.typography.intensity.list.forEach( intensity => {
			props[`.text-${intensity.name}`] = {
				['color']: `var(--text-${intensity.name})`
			};
		} );

		return props;
	}

}