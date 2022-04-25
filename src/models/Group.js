module.exports = (sequelize, Datatypes) => {
	const Group = sequelize.define(
		'Group',
		{
			type: {
				type: Datatypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);

	return Group;
};
