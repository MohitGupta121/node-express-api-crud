export default (sequelize, DataTypes) => {
  const student = sequelize.define(
    "testings",
    {
      name: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      enroll: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  return student;
};
