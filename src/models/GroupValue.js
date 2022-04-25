module.exports = (sequelize, DataTypes) => {
	const GroupValue = sequelize.define(
		'GroupValue',
		{
			groupId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			parentId: {
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: 'groups_name',
		}
	);

	GroupValue.associate = (models) => {
		GroupValue.belongsTo(models.Group, { foreignKey: 'groupId' });
		GroupValue.belongsTo(GroupValue, { as: 'parent', foreignKey: 'parentId' });
		GroupValue.hasMany(GroupValue, { as: 'children', foreignKey: 'parentId' });
	};

	return GroupValue;
};
