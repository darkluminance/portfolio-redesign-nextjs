import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Blog.find().select("thumbnail");

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler, true);
