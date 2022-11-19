const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//comment
    //id
    //date created
    //user name (foreign key to user)
    //blog post (foreign key to blogpost)

class Comment extends Model{};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        date_created: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            }
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
);

module.exports = Comment;
