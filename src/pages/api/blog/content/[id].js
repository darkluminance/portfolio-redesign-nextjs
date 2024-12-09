import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const id = req.query.id;

		let ret = await Blog.findById(id).select("content");

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler, true);
