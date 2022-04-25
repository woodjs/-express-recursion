const { dbLoader } = require('./db.loader');
const { serverLoader } = require('./server.loader');

module.exports = async () => {
	await dbLoader()
		.then(() => console.info('БД подключен'))
		.catch((e) => console.error(`Ошибка при подключений к бд: ${e.message}`));
	await serverLoader()
		.then(() => console.info('Сервер запущен'))
		.catch((e) => console.error(`Ошибка при запуске сервера: ${e.message}`));
};
