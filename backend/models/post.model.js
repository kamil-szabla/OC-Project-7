module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Post;
};
