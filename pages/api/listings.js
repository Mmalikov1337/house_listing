// import fs from "fs";
import House from "../../models/House";

export default async (req, res) => {
  // await new Promise((resolve, reject) =>
  //   fs.readFile('data/houses.json', function(err, data) {
  //     var json = JSON.parse(data);
  //     res.status(200).json(json.slice(0, 20));
  //     resolve(res);
  //   }));
  const limit = ~~req.query.limit > 0 ? ~~req.query.limit : null;
  const offset = ~~req.query.offset > 0 ? ~~req.query.offset : null;
  const data = await House.findAll({
    limit,
    offset,
  });
  res.send(data);
};
