module.exports = (sequelize, Datatypes) => {
	const Group = sequelize.define(
		'Group',
		{
			type: {
				type: Datatypes.STRING,
				allowNull: false,
			},
			parentId: {
				type: Datatypes.INTEGER,
			},
		},
		{
			timestamps: false,
		}
	);

	Group.associate = (models) => {
		Group.belongsTo(Group, { as: 'parent', foreignKey: 'parentId' });
		Group.hasMany(Group, { as: 'children', foreignKey: 'parentId' });
	};

	return Group;
};
