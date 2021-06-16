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
      allowNull: false,
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
    created_at: {
      type: "TIMESTAMP",
      // defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });

  User.associate = models => {
    User.hasMany(models.Post, {
      onDelete: 'cascade',
    }); 
  }


  return User;
};
