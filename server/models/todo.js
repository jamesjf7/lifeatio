const sequelize = require('sequelize');
const database = require('../config/database');

const { DataTypes } = sequelize;

const Todo = database.define('todo', {
    // Define attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
},{
    freezeTableName: false, // Model tableName will be the same as the model name if true
    timestamps: true, // true by default
});

module.exports = Todo;