import House from "../../../models/House";

export default async (req, res) => {
	const house = await House.findByPk(req.query.id)
	if(house){
		return res.send({house});
	}
	res.status(404).send({message:"not found"})
};
