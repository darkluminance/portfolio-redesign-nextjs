import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Blog.find().select(
			"title description id thumbnail createdAt likes comments"
		);

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler, true);
