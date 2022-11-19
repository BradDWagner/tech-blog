const sequelize = require('../config/connection');
const userData = require('./userData.json');
const postData = require('./postData.json');
const { Post, User } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    const post = await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0)
};

seedDatabase()