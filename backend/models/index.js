'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.post = require('./post')(sequelize, Sequelize);
db.user = require('./user')(sequelize, Sequelize);
db.comments = require('./comment')(sequelize, Sequelize);

db.user.belongsToMany(db.post, {
  through: 'seen',
  as: 'posts',
  foreignKey: 'userId'
});

db.post.belongsToMany(db.user, {
  through: "seen",
  as: "users",
  foreignKey: "postId",
});

module.exports = db;
