import { Sequelize } from "sequelize";

const connection = new Sequelize({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
  logging:false
});

export default connection;
