require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT || 'mysql',
		pool: {
			min: 0,
			max: 5,
			acquire: 30000,
			idle: 10000,
		},
		logging: process.env.NODE_ENV === 'DEVELOPMENT',
	}
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.DataTypes = DataTypes;

module.exports = db;
