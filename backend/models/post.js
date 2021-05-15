module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    media: {
      type: DataTypes.STRING(1200),
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  });
  return Post;
}