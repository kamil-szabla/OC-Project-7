module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://picsum.photos/id/1025/200/300",
    },
    postId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      default: new Date(),
    },
  });
  return User;
};
