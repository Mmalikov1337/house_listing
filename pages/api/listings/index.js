// import fs from "fs";
import validateQuery from "../../../lib/validateQuery";
import House from "../../../models/House";

export default async (req, res) => {
  // await new Promise((resolve, reject) =>
  //   fs.readFile('data/houses.json', function(err, data) {
  //     var json = JSON.parse(data);
  //     res.status(200).json(json.slice(0, 20));
  //     resolve(res);
  //   }));

  const { filter, pagination } = validateQuery(req.query);
  const { count, rows } = await House.findAndCountAll({
    ...pagination,
    where: { ...filter },
  });
  res.send({ count, houses: rows });
};
