const { sequelize } = require('../config/db.config');
const { User, Group, UserGroup, GroupValue, City } = require('../models');

const findAll = () =>
	User.findAll({
		attributes: {
			exclude: ['cityId'],
		},
		include: [
			{ model: City, as: 'city', attributes: { exclude: ['id'] } },
			{
				model: UserGroup,
				attributes: ['id', 'nameId'],
				include: [
					{
						model: GroupValue,
						include: [Group],
						attributes: ['id', 'parentId', 'name'],
					},
				],
			},
		],
	});

exports.UserRepository = {
	findAll,
};
