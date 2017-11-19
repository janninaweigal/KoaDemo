/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('test', {
        name: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        password: {
            type: DataTypes.CHAR(128),
            allowNull: false
        }
    }, {
        tableName: 'test'
    });
};
