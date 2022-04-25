const { UserRepository } = require('../repositories/User.repository');

const findAll = async () => {
	const data = await UserRepository.findAll();
	return data;
};

exports.UserService = {
	findAll,
};
