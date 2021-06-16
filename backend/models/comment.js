module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: "TIMESTAMP",
      // defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });
  return Comment;
};
