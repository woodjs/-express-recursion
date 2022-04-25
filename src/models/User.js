module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			cityId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);

	User.associate = (models) => {
		User.belongsTo(models.City, {
			foreignKey: 'cityId',
			as: 'city',
		});
		User.hasMany(models.UserGroup, {
			foreignKey: 'userId',
		});
	};

	return User;
};
