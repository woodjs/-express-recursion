/* eslint-disable no-return-assign */
const { recursiveList } = require('../helpers/recursiveList');
const { sortParents } = require('../helpers/sortParents');
const { toTree } = require('../helpers/toTree');
const { GroupValueService } = require('./GroupValue.service');

const getByData = async (data) => {
	if (!data) throw Error('Некорректные параметры');

	const groupsData = await GroupValueService.findAll();

	data.forEach((user) => {
		const { name, city, UserGroups: userGroups } = user;
		const groups = [];

		userGroups.forEach((userGroup) => {
			const { GroupValue: value } = userGroup;
			groups.push(value.get({ plain: true }));
		});

		if (groups.length > 0) {
			const groupSort = sortParents(groups);
			// Получаем последний элемент
			const groupChildren = groupSort.pop();
			const dataIndex = groupsData.findIndex(
				(el) => el.id === groupChildren.id
			);

			if (groupsData[dataIndex].childrens) {
				groupsData[dataIndex].childrens.push({ name, city });
			} else {
				groupsData[dataIndex].childrens = [];
			}

			groupsData[dataIndex].isChildren = true;
		}
	});

	// Превращаем данные в рекурсивное дерево
	const tree = toTree(groupsData);
	// Генерация списка
	const html = recursiveList(tree);

	return html;
};

exports.UserTemplateService = {
	getByData,
};
