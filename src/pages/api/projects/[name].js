import withDatabaseConnection from "@/middleware/database";
import { Project } from "@/models/Projects";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const { name } = req.query;
		let ret = await Project.findOne({ thumbnailURL: name });

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler);
