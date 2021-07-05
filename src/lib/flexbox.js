
module.exports = {

	rules: function () {
		let props = {};
		const sizes = 13;
		props['.flex'] = {
			minWidth: '0',
			minHeight: '0',
		};
		for ( let i = 0; i < sizes.length; i++ ) {
			props[`.flex-${i}`] = {
				flex: `${i} ${i} auto`
			};
		}



		return props;
	}

}