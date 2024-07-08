import withDatabaseConnection from "@/middleware/database";
import { Skills } from "@/models/Skills";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Skills.aggregate([
			{
				$group: {
					_id: "$category",
					skills: { $push: "$name" },
				},
			},
		]);
		ret = ret.filter((category) => category._id !== "");

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler);
