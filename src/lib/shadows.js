
module.exports = {

	rootVars: function ( ssot ) {
		let properties = {};
		let prop = {};
		properties['--bs-key-rgb'] = '0, 0, 0';
		properties['--bs-am-rgb'] = '0, 0, 0';
		properties['--op-ratio'] = `${ssot.shadows.opacityScaleRatio}`;
		properties['--bs-direction'] = '1';
		//
		prop['--bs-key-rgba'] = 'rgba(var(--bs-key-rgb), var(--bs-key-op-default))',
			prop['--bs-am-rgba'] = 'rgba(var(--bs-am-rgb), var(--bs-am-op-default))'
		properties['*'] = prop;
		//
		for ( let i = 0; i < ssot.shadows.intensity.list.length; i++ ) {
			let intensity = ssot.shadows.intensity.list[i];
			if ( i === 0 ) {
				properties[`--bs-key-op-${intensity.name}`] = `${ssot.shadows.intensity.list[0].valueKey}`;
				properties[`--bs-am-op-${intensity.name}`] = `${ssot.shadows.intensity.list[0].valueAmbient}`;
			}
			if ( i > 0 ) {
				properties[`--bs-key-op-${intensity.name}`] = `calc(var(--bs-key-op-${ssot.shadows.intensity.list[i - 1].name}) * var(--op-ratio))`;
				properties[`--bs-am-op-${intensity.name}`] = `calc(var(--bs-am-op-${ssot.shadows.intensity.list[i - 1].name}) * var(--op-ratio))`;
			}
		}
		//
		properties['--bs-key-of-x'] = '0';
		properties['--bs-key-of-y'] = 'calc(1px * var(--bs-direction))';
		properties['--bs-key-blur'] = 'calc(3px * var(--bs-direction))';
		properties['--bs-key-spread'] = '0';
		//

		//
		properties['--bs-am-of-x'] = '0';
		properties['--bs-am-of-y'] = 'calc(4px * var(--bs-direction))';
		properties['--bs-am-blur'] = 'calc(12px * var(--bs-direction))';
		properties['--bs-am-spread'] = '0';
		properties['--bs-am-rgba'] = 'rgba(var( --bs-am-rgb ), var( --bs-am-op-default))';
		//		

		return properties;
	},

	rules: function ( ssot ) {
		let props = {};
		let shadowDeclarationSelector = [];
		//
		ssot.shadows.sizes.list.forEach( size => {
			shadowDeclarationSelector.push( `.shadow-${size.name}` );
		} );
		//
		props[shadowDeclarationSelector] = {
			['box-shadow']:
				`var(--bs-key-of-x)
			var(--bs-key-of-y)
			var(--bs-key-blur) 
			var(--bs-key-spread) 
			var(--bs-key-rgba)
			,
			var(--bs-am-of-x) 
			var(--bs-am-of-y) 
			var(--bs-am-blur) 
			var(--bs-am-spread) 
			var(--bs-am-rgba)
			`
		};

		//

		ssot.shadows.intensity.list.forEach( intensity => {
			props[`.shadow-${intensity.name}`] = {
				['--bs-key-rgba']: `rgba(var(--bs-key-rgb), var(--bs-key-op-${intensity.name}))`,
				['--bs-am-rgba']: `rgba(var(--bs-am-rgb), var(--bs-am-op-${intensity.name}))`,
			}
		} );
		//
		ssot.shadows.sizes.list.forEach( size => {
			props[`.shadow-${size.name}`] = {
				['--bs-am-of-y']: `calc(${size.ambientLayer.offsetY} * var(--bs-direction))`,
				['--bs-am-blur']: `${size.ambientLayer.blur}`,
				['--bs-key-of-y']: `calc(${size.keyLayer.offsetY} * var(--bs-direction))`,
				['--bs-key-blur']: `${size.keyLayer.offsetY}`,
			}
		} );


		return props;
	},

}