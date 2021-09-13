import validateQuery from "../../../lib/validateQuery";
import House from "../../../models/House";

export default async (req, res) => {
	console.log("req.query", req.query)
	const house = await House.findByPk(req.query.id)
	if(house){
		return res.send({house});
	}
	res.status(404).send({message:"not found"})
	console.log("house",house, !!house)
};
