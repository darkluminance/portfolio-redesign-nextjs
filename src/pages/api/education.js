import withDatabaseConnection from "@/middleware/database";
import { Education } from "@/models/Education";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Education.find();

		res.status(200).json({ data: ret.slice(1) });
	}
};

export default withDatabaseConnection(handler);
