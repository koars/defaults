module.exports = {
	scripts: {
		src: 'assets/js/index.js',
		dest: '/js'
	},
	styles: {
		src: 'assets/css/index.scss',
		dest: '/css'
	},
	bower: {
		scripts: '/js/deps',
		styles: '/css/deps',
		assets: '/deps/:path*'
	},
	polyfills: '/js/deps/polyfills'
};