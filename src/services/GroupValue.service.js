const {
	GroupValueRepository,
} = require('../repositories/GroupValue.repository');

const findAll = async () => {
	const records = await GroupValueRepository.findAll().then((res) =>
		res.map((item) => item.get())
	);
	return records;
};

exports.GroupValueService = {
	findAll,
};
