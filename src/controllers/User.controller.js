const { UserService } = require('../services/User.service');
const { UserTemplateService } = require('../services/UserTemplate.service');

exports.findAll = async (req, res) => {
	const users = await UserService.findAll();
	const template = await UserTemplateService.getByData(users);
	return res.render('index', {
		menu: template,
	});
};
