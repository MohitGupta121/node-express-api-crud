export default (sequelize, DataTypes) => {
    const images = sequelize.define(
      "images",
      {
        image: {
          type: DataTypes.STRING,
        },
      },
      {
        createdAt: false,
        updatedAt: false,
      }
    );
  
    return images;
  };
  