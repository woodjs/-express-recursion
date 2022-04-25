const express = require('express');
require('express-async-errors');
const eta = require('eta');

const routes = require('../routes');
const { errorHandler } = require('../middleware/error.middleware');

exports.serverLoader = async () => {
	const app = express();

	app
		.engine('eta', eta.renderFile)
		.set('view engine', 'eta')
		.set('views', 'src/views')
		.use('/static', express.static(`src/public`))
		.use(routes)
		.use(errorHandler)
		.listen(5000);

	return app;
};
