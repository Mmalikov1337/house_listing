import dotenv from "dotenv";
import dbConnection from "../../lib/dbConnection";
import House from "../../models/House";
import fs from "fs";

dotenv.config();

export default async (req, res) => {
	let houses = await fs.promises.readFile("data/houses.json", "utf8");
	houses = JSON.parse(houses);
	 houses.forEach((it) => {
		it["id"] = it["id"] + 1;
	})
	dbConnection
		.authenticate()
		.then(() => {
			console.info("db connected.");
		})
		.catch((e) => {
			console.error("db not connected:", e);
		});

	await dbConnection.sync({force: true});
	await House.bulkCreate(houses);
	res.send("initialized");
};
