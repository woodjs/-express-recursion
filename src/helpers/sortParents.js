exports.sortParents = (data) => {
	if (!data) throw Error('Отсутствуют данные');
	if (data.length === 0) return [];

	const findParent = () => data.filter((item) => item.parentId === null).pop();
	const findByParentId = (parentId) =>
		data.filter((item) => item.parentId === parentId);
	const arr = [];

	const parent = findParent();
	let children = findByParentId(parent.id).pop();
	arr.unshift(parent);

	while (true) {
		arr.push(children);
		const tmp = findByParentId(children.id);
		if (tmp.length > 0) {
			children = tmp.pop();
		} else {
			break;
		}
	}

	return arr;
};
