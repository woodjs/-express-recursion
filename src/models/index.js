/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { sequelize, DataTypes } = require('../config/db.config');

const models = {};

fs.readdirSync(__dirname).forEach((file) => {
	if (file !== path.basename(__filename) && file.endsWith('.js')) {
		const model = require(path.join(__dirname, file))(sequelize, DataTypes);

		models[model.name] = model;
	}
});

Object.keys(models).forEach((model) => {
	if (models[model].associate) {
		models[model].associate(models);
	}
});

module.exports = models;
