

module.exports = {

	arrayToKeyValue: function ( array ) {
		let keyValue = {};
		
		array.forEach( element => {
			keyValue[element.name] = element.value;
		} );
		
		return keyValue
	},
	
	
}