import { Op } from "sequelize";
export default function validateQuery(queryObj) {
  const entries = Object.entries(queryObj);
  const result = {filter:{},pagination:{}};
  for (let [key, value] of entries) {
    switch (key) {//garage: { [Op.gte]: 3, [Op.lte]: 3 }
      case "price_gte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["price"] = {...result.filter["price"],[Op.gte]:temp};
        continue;
      }
      case "price_lte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["price"] = {...result.filter["price"],[Op.lte]:temp};
        continue;
      }
      case "square_gte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["square"] = {...result.filter["square"],[Op.gte]:temp};
        continue;
      }
      case "square_lte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["square"] = {...result.filter["square"],[Op.lte]:temp};
        continue;
      }

      case "garage_gte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["garage"] = {...result.filter["garage"],[Op.gte]:temp};
        continue;
      }
      case "garage_lte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["garage"] = {...result.filter["garage"],[Op.lte]:temp};
        continue;
      }
      case "bedrooms_gte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["bedrooms"] = {...result.filter["bedrooms"],[Op.gte]:temp};
        continue;
      }
      case "bedrooms_lte": {
        const temp = Number(value);
        if (isNaN(temp)) continue;
        result.filter["bedrooms"] = {...result.filter["bedrooms"],[Op.lte]:temp};
        continue;
      }

      case "type": {
        result.filter["type"] = {[Op.eq]:value};
        continue;
      }
      case "hasBasement": {
        result.filter["hasBasement"] = {[Op.eq]:value === "Has_basement"};
        continue;
      }
      case "limit": {
        const temp = Number(value);
        if (isNaN(temp) || temp <= 0) result.pagination["limit"] = 12;
        result.pagination["limit"] = temp;
        continue;
      }
      case "offset": {
        const temp = Number(value);
        if (isNaN(temp) || temp < 0) result.pagination["offset"] = 0;
        result.pagination["offset"] = temp;
        continue;
      }
      default:
        continue;
    }
  }
//   console.log("result",result);
  return result;
}
