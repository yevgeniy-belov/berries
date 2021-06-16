// -------------------------------------------------------
// * Alias
//   An additional, comma separated CSS selector chain that doesn't have an explicit modifier.
//   Example: ".border-primary-strongest, .border-primary" - "strongest" variant is default hence it will have an implicit alias.
// -------------------------------------------------------

const sides = ['all', 'top', 'right', 'bottom', 'left'];
const styles = ['solid', 'dashed', 'dotted'];

module.exports = {
	strengthVars: function ( ssot ) {
		let props = {};
		let strongestValue = ssot.border.strength.list[ssot.colors.list.length - 1].value;
		ssot.border.strength.list.forEach( strength => {
			props[`--border-color-${strength.name}`] = `hsla(0, 0%, var(--fg-lightness), ${strength.value})`;
			ssot.colors.list.forEach( color => {
				props[`--border-color-${color.name}-${strength.name}`] =
				`hsla(var(--h-${color.name}),
				var(--s-${color.name}),
				var(--l-${color.name}),
				${strength.value * ( 1 / strongestValue )})`;
			} )
		} );
		
		props['--border-color'] = `var(--border-color-${ssot.border.strength.default.regular})`;

		return props;
	},

	globalProps: function () {
		let props = {};
		sides.forEach( side => {
			props[`--border-${side}-width`] = `0`;
			props[`--border-${side}-style`] = `solid`;
			props[`--border-${side}-color`] = `var(--border-color)`;
			props[`border-${side}`] = `var(--border-${side}-width) var(--border-${side}-style) var(--border-${side}-color)`;
		} );

		return props;
	},


	rules: function ( ssot ) {
		let props = {};
		// Strength
		ssot.border.strength.list.forEach( strength => {
			// Removes the 'default' part.
			let strengthName = strength.name !== 'default' ? `-${strength.name}` : '';
			props[`.border${strengthName}`] = {
				'--border-top-color': `var(--border-color${strengthName})`,
				'--border-right-color': `var(--border-color${strengthName})`,
				'--border-bottom-color': `var(--border-color${strengthName})`,
				'--border-left-color': `var(--border-color${strengthName})`,
			};
			if ( strength.name !== 'default' ) {
				props[`.border-t${strengthName}`] = { '--border-top-color': `var(--border-color${strengthName})` }
				props[`.border-r${strengthName}`] = { '--border-right-color': `var(--border-color${strengthName})` }
				props[`.border-b${strengthName}`] = { '--border-bottom-color': `var(--border-color${strengthName})` }
				props[`.border-l${strengthName}`] = { '--border-left-color': `var(--border-color${strengthName})` }
			}
		} );

		// Color
		// Generate less specific color rules:
		ssot.colors.list.forEach( color => {
			ssot.border.strength.list.forEach( strength => {
				// Adds *aliases for default strengths. 
				let defaultAllSidesAlias = `${strength.name === ssot.border.strength.default.accent ?
					`, .border-${color.name}` : ``
					}`;
				props[`.border-${color.name}-${strength.name}${defaultAllSidesAlias}`] = {
					'--border-top-color': `var(--border-color-${color.name}-${strength.name})`,
					'--border-right-color': `var(--border-color-${color.name}-${strength.name})`,
					'--border-bottom-color': `var(--border-color-${color.name}-${strength.name})`,
					'--border-left-color': `var(--border-color-${color.name}-${strength.name})`,
				};
			} )
		} );

		// Generate more specific color rules:
		ssot.colors.list.forEach( color => {
			ssot.border.strength.list.forEach( strength => {
				props[`.border-t-${color.name}-${strength.name}${`${strength.name === ssot.border.strength.default.accent ?`, .border-t-${color.name}` : ``}`}`] = { '--border-top-color': `var(--border-color-${color.name}-${strength.name})` }
				props[`.border-r-${color.name}-${strength.name}${`${strength.name === ssot.border.strength.default.accent ?`, .border-r-${color.name}` : ``}`}`] = { '--border-right-color': `var(--border-color-${color.name}-${strength.name})` }
				props[`.border-b-${color.name}-${strength.name}${`${strength.name === ssot.border.strength.default.accent ?`, .border-b-${color.name}` : ``}`}`] = { '--border-bottom-color': `var(--border-color-${color.name}-${strength.name})` }
				props[`.border-l-${color.name}-${strength.name}${`${strength.name === ssot.border.strength.default.accent ?`, .border-l-${color.name}` : ``}`}`] = { '--border-left-color': `var(--border-color-${color.name}-${strength.name})` }
			} )
		} );

		// Width
		ssot.border.width.list.forEach( width => {
			// Removes the 'default' part.
			let widthName = width.name !== 'default' ? `-${width.name}` : '';
			props[`.border${widthName}`] = {
				'--border-top-width': `${width.value}`,
				'--border-right-width': `${width.value}`,
				'--border-bottom-width': `${width.value}`,
				'--border-left-width': `${width.value}`,
			};
			props[`.border-t${widthName}`] = { '--border-top-width': `${width.value}` }
			props[`.border-r${widthName}`] = { '--border-right-width': `${width.value}` }
			props[`.border-b${widthName}`] = { '--border-bottom-width': `${width.value}` }
			props[`.border-l${widthName}`] = { '--border-left-width': `${width.value}` }
		} );

		// Style
		styles.forEach( style => {
			props[`.border-${style}`] = {
				'--border-top-style': `${style}`,
				'--border-right-style': `${style}`,
				'--border-bottom-style': `${style}`,
				'--border-left-style': `${style}`,
			};
			props[`.border-t-${style}`] = { '--border-top-style': `${style}` }
			props[`.border-r-${style}`] = { '--border-right-style': `${style}` }
			props[`.border-b-${style}`] = { '--border-bottom-style': `${style}` }
			props[`.border-l-${style}`] = { '--border-left-style': `${style}` }
		} );

		return props;
	},

	vars: function ( ssot ) {
		return {
			'.theme': { ...module.exports.strengthVars( ssot ) },
			'*, ::before, ::after ': { ...module.exports.globalProps() },
		};
	}
}