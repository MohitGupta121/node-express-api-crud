export default (sequelize, DataTypes) => {
  const login = sequelize.define(
    "login",
    {
      computer_code: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  return login;
};
