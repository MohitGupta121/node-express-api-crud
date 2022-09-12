import dbConfig from "../config/index.js";

import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import students from "./studentModel.js";
import image from "./uploadImage.js";


db.students = students(sequelize, DataTypes);
db.image = image(sequelize, DataTypes);


db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// // 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })

export default db;
