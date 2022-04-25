const express = require('express');
const eta = require('eta');

const routes = require('../routes');

exports.serverLoader = async () => {
	const app = express();

	app
		.engine('eta', eta.renderFile)
		.set('view engine', 'eta')
		.set('views', 'src/views')
		.use('/static', express.static(`src/public`))
		.use(routes)
		.listen(5000);

	return app;
};
