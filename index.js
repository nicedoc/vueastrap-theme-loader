// themes loader makes theme variables available to each module during compilation process
// its relative to the module/components sufolder of the vue-component folder
// configuration within webpack.config.js stating theme locations is required for this to work
var loaderUtils = require('loader-utils')

module.exports = function(source) {
	this.cacheable();
	var query = loaderUtils.parseQuery(this.query);

	var config = query.themes || false;
	if (config && query.themes.length > 0) {
		var result = "";
        query.themes.forEach(function(theme){
			result += "@import '" + theme + "';\n";
		});
		return result += source;
	}
	return source;
};