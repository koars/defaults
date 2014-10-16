module.exports = function(config) {
	config.defaults('assets', require('./lib/assets'));
	config.defaults('session', require('./lib/session'));
	config.defaults('views', require('./lib/views'));
};
