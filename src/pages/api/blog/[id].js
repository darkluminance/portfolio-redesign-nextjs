import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const id = req.query.id;

		let ret = await Blog.findById(id).select(
			"title description id thumbnail createdAt likes comments"
		);

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler, true);
