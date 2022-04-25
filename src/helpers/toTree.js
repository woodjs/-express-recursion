const toTree = (data, id = null) =>
	data.reduce((previous, current) => {
		if (current.parentId === id) {
			const obj = { ...current };
			const children = toTree(data, current.id);
			if (children.length) {
				obj.list = children;
			} else {
				obj.list = [];
			}
			previous.push(obj);
		}
		return previous;
	}, []);

exports.toTree = toTree;
