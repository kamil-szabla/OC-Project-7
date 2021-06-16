module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
    },
    media: {
      type: DataTypes.STRING(1200),
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: "TIMESTAMP",
      // defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });

  Post.associate = models = {

  }

  return Post;
}