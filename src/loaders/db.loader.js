const { sequelize } = require('../config/db.config');
const models = require('../models');
const users = require('../data/users.json');

exports.dbLoader = async () => {
	if (process.env.NODE_ENV === 'DEVELOPMENT') {
		return sequelize.sync({ force: true }).then(async () => {
			// Города
			await models.City.bulkCreate(
				[
					{
						name: 'Москва',
						data: '10000000',
					},
					{
						name: 'Воронеж',
						data: '1000000',
					},
					{
						name: 'Санкт-Петербург',
						data: '3000000',
					},
				],
				{
					ignoreDuplicates: true,
				}
			);

			// Groups
			await models.Group.bulkCreate([
				{ type: 'city' },
				{ type: 'district', parentId: 1 },
				{
					type: 'street',
					parentId: 2,
				},
			]);

			models.GroupValue.bulkCreate([
				{ groupId: 1, name: 'Москва г.' },
				{ groupId: 1, name: 'Воронеж г.' },
				{ groupId: 1, name: 'Санкт-Петербург г.' },
				{
					groupId: 2,
					name: 'Пресненский р-н',
					parentId: 1,
				},
				{
					groupId: 2,
					name: 'Коптево р-н',
					parentId: 1,
				},
				{
					groupId: 2,
					name: 'Отрадное р-н',
					parentId: 1,
				},
				{
					groupId: 2,
					name: 'Коптевская ул',
					parentId: 5,
				},
				{
					groupId: 2,
					name: 'Нарвская ул.',
					parentId: 5,
				},
				{
					groupId: 2,
					name: 'Сигнальный проезд',
					parentId: 6,
				},
				{
					groupId: 2,
					name: 'Гашека ул.',
					parentId: 4,
				},
				{
					groupId: 2,
					name: 'Рочдельская ул.',
					parentId: 4,
				},
				{
					groupId: 2,
					name: 'Отрадная ул.',
					parentId: 6,
				},
				{
					groupId: 2,
					name: 'Советский р-н',
					parentId: 2,
				},
				{
					groupId: 2,
					name: 'Центральный р-н',
					parentId: 2,
				},
				{
					groupId: 2,
					name: 'Патриотов пр-т',
					parentId: 13,
				},
				{
					groupId: 2,
					name: 'Кривошеина ул.',
					parentId: 13,
				},
				{
					groupId: 2,
					name: 'Ленина ул.',
					parentId: 14,
				},
				{
					groupId: 2,
					name: 'Рабочий пр-т',
					parentId: 14,
				},
				{
					groupId: 2,
					name: 'Выборгский р-н',
					parentId: 3,
				},
				{
					groupId: 2,
					name: 'Фрунзенский р-н',
					parentId: 3,
				},
				{
					groupId: 2,
					name: 'Светлановский пр-т',
					parentId: 19,
				},
				{
					groupId: 2,
					name: 'Орбели ул.',
					parentId: 19,
				},
				{
					groupId: 2,
					name: 'Лиговский пр-т"',
					parentId: 20,
				},
				{
					groupId: 2,
					name: 'Воронежская ул.',
					parentId: 20,
				},
			]);

			// Юзеры
			users.forEach((user) => {
				const { name, city_id: cityId, groups } = user;

				models.User.create({ name, cityId }).then((res) => {
					// const [one, two, three] = groups;

					groups.forEach((item) => {
						models.GroupValue.findOne({
							where: { name: item.name },
						}).then(({ id }) => {
							models.UserGroup.create({ userId: res.id, nameId: id });
						});
					});
				});
			});
		});
	}

	return sequelize.sync();
};
