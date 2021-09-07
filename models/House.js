import { DataTypes, Model } from "sequelize";
import dbConnection from "../lib/dbConnection";
class House extends Model {}

House.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.JSON,
    },
    builder: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.STRING,
    },
    square: {
      type: DataTypes.INTEGER,
    },
    hasBasement: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
    },
    garage: {
      type: DataTypes.INTEGER,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    amenities: {
      type: DataTypes.JSON,
    },
    images: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "House",
    tableName: "Houses",
  }
);

export default House;
