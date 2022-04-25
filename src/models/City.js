module.exports = (sequelize, DataTypes) => {
	const City = sequelize.define(
		'City',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			data: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);

	return City;
};
