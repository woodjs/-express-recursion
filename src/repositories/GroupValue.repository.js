const { GroupValue } = require('../models');

const findAll = () => GroupValue.findAll();

exports.GroupValueRepository = {
	findAll,
};
