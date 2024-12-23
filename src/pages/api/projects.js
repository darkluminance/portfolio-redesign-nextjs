import withDatabaseConnection from "@/middleware/database";
import { Project } from "@/models/Projects";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Project.find().sort({ year: -1 });

		res.status(200).json({ data: ret.slice(0, -1) });
	}
};

export default withDatabaseConnection(handler);
