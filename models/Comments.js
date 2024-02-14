const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  commentText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'post',
        key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'user',
        key: 'id',
    },
  }
},{
    sequelize: sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
});

module.exports = Comments;
