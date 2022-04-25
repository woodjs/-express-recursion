module.exports = (sequelize, DataTypes) => {
	const UserGroup = sequelize.define(
		'UserGroup',
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			nameId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: 'user_groups',
		}
	);

	UserGroup.associate = (models) => {
		UserGroup.belongsTo(models.User, {
			foreignKey: 'userId',
		});
		UserGroup.belongsTo(models.GroupValue, {
			foreignKey: 'nameId',
		});
	};

	return UserGroup;
};
